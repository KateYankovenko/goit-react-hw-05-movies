import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "services/API";
import PropTypes from 'prop-types'; 
import { ReviewsList, ReviewsItem, AuthorName, Message } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getReview = async (id) => {
            setIsLoading(true);
            try {
                const data = await fetchReviewById(id);
                const allReviews = data.results.map(({ author, content, id }) => ({ author, content, id }));
                setReviews(allReviews);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    
        getReview(movieId);
        
    }, [movieId])

    if (reviews.length > 0) {
        return (
            <ReviewsList>
                {reviews.map(({ author, content, id }) => {
                    return (
                        <ReviewsItem key={id}>
                            <AuthorName>Author: {author}</AuthorName>
                            <p>{content}</p>
                        </ReviewsItem>
                    )
                }
                )}
            </ReviewsList>
        )
    }
    else if (isLoading) {
        return <Loader/>
    } else {
        return <Message>We don't have any reviews for this movie</Message>;
    }
}

Reviews.propTypes = {
    movieId: PropTypes.string,
    isLoading: PropTypes.bool,
    reviews: PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.string,
        id: PropTypes.number,
    })
}

export default Reviews;