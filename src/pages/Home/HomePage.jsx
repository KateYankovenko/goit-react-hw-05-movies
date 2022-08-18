import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "services/API";
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
import { Title } from "./HomePage.styled";

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getTrendingMovies = async () => {
             setIsLoading(true);
           try {
            fetchTrendingMovies().then(data => setTrendingMovies([...data.results]));
           } catch (error) {
               console.log(error.message);
           } finally {
                setIsLoading(false);
            }
       } 
        getTrendingMovies();
    }, [])
    return (
        <>
            <Title>Trending Today</Title>
            {isLoading && <Loader />}
            {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />} 
        </>
    )
}

export default HomePage;