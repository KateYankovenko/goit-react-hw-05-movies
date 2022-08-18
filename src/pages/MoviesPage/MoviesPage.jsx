import { useSearchParams } from 'react-router-dom';
import { ErrorMessage, Formik } from 'formik';
import { MovieList } from '../../components/MovieList/MovieList';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { fetchMovieByKeyWord } from 'services/API';
import { Loader } from '../../components/Loader/Loader';
import { StyledField, StyledForm, Button, Message } from './MoviesPage.styled';

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const query = searchParams.get("query") ?? "";
     
    useEffect(() => {
        const getMoviesByKeyWord = async (keyWord) => {
            setIsLoading(true);
            try {
                const data = await fetchMovieByKeyWord(keyWord);
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        if (query === "") return;

        getMoviesByKeyWord(query);
        
    }, [query])

    return (
            <>
                 <Formik initialValues={{ query: '' }}
                 validationSchema={Yup.object({ query: Yup.string() })}
                 onSubmit={({ query }, { resetForm }) => {
                     setSearchParams({ query });
                     resetForm();
                 }}
                 >
                     <StyledForm>
                        <StyledField name='query' type='text' placeholder="Enter movie's title"/>
                        <Button type='submit'>Search</Button>
                        <ErrorMessage name='query' color="red">Something went wrong</ErrorMessage>
                     </StyledForm>
                </Formik>
                 {isLoading && <Loader />}
                {Object.keys(movies).length > 0 && <MovieList movies={movies} />}    
                {Object.keys(movies).length === 0 && query && <Message>There is no movie with key word ${query}</Message>}
             </>
    )
}

export default MoviesPage;