import { useEffect, useState } from "react"
import { fetchMovieById } from "services/API";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { Title, Img, Text, SecondaryTitle } from "./MovieCard.styled";


export const MovieCard = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const getMovie = async(id) => {
          try {
              const data = await fetchMovieById(id);
              setMovie(data);
          } catch (error) {
              console.log(error.message);
            }
        }  
        
     getMovie(movieId);

    }, [movieId])

    if (Object.keys(movie).length > 0) {
        const { title, vote_average, overview, genres, poster_path } = movie;
        const userScore = vote_average * 10;
        const movieGenres = genres.map(genre => genre.name).join(", ");

        return (
            <Box 
                width={1 / 2}
                p="3"
                borderWidth="3"
                borderStyle='solid'
                borderColor='accent'
                borderRadius="normal"
                bg="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                mr="auto"
                ml="auto"
                mb="4"
                as="div">
            <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} height="400" width="300" alt={title} />
            <Title>{title}</Title>
            <SecondaryTitle>User score: <span>{userScore}%</span></SecondaryTitle>
            <SecondaryTitle>Overview</SecondaryTitle>
            <Text>{overview}</Text>
            <SecondaryTitle>Genres</SecondaryTitle>
            <Text>{movieGenres}</Text>
        </Box>
        )
    }
    
}
 
MovieCard.propTypes = {
    movieId: PropTypes.string,
    movie: PropTypes.shape({
        title: PropTypes.string,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        poster_path: PropTypes.string,
    })
}