import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "services/API";
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { CastList, CastItem, Img, Text, TextCharacter } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getCast = async (id) => {
            setIsLoading(true);
            try {
                const data = await fetchCastById(id);
                const castInfo = data.cast.map(({ name, character, profile_path, id }) => ({ name, character, profile_path, id }));
                setCast(castInfo);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    
        getCast(movieId);
        
    }, [movieId])

    if (cast.length > 0) {
        
        return (
            <CastList>
                {cast.map(({ name, character, profile_path, id }) => {
                    let path = "";
                    profile_path ? path = `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
                                 : path = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';
                        return (
                            <CastItem key={id}>
                                <Img src={path} alt={name} />
                                <Text>{name}</Text>
                                <Text>Character:</Text>
                                <TextCharacter>{character}</TextCharacter>
                            </CastItem>
                        )
                }
                )}
            </CastList>
        )
    } 
    if (isLoading) {
        return <Loader />;
    } 
}

Cast.propTypes = {
    movieId: PropTypes.string,
    isLoading: PropTypes.bool,
    cast: PropTypes.shape({
        name: PropTypes.string,
        character: PropTypes.string,
        id: PropTypes.string,
        profile_path: PropTypes.string,
    })
}

export default Cast;