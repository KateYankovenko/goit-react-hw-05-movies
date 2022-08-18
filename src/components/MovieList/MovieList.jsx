import { useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import { Movies, Movie, StyledLink } from "./MovieList.styled";

export const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <Movies>
            {movies.map(({id, title}) => <Movie key={id}><StyledLink to={`/movies/${id}`} state={{from: location}}>{title}</StyledLink></Movie>)}
        </Movies>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    }))
}