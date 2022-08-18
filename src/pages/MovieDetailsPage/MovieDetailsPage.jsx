import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { StyledLink, Title} from './MovieDetailsPage.styled';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Box } from "components/Box";
import { Loader } from "components/Loader/Loader";

const MovieDetailsPage = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
        return (
            <>
                <StyledLink to={backLinkHref}><IoIosArrowRoundBack/> Go back</StyledLink>
                <MovieCard />
                <Box as="div">
                    <Title>Additional information</Title>
                    <Box as="div"
                        display="flex"
                        justifyContent="center">
                        <StyledLink to='cast'>Cast</StyledLink>
                        <StyledLink to='reviews'>Reviews</StyledLink>
                    </Box>
                    
                </Box>
                <Suspense fallback={<Loader />}>
                    <Outlet/>
                </Suspense>
                
            </>
        )
}

export default MovieDetailsPage;