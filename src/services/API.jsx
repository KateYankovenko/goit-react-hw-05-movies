import  axios from 'axios';

const API_KEY = '5667e8e70bc7c9d5800a67be9fc5f144';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY}

export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`/trending/movie/day`);
        return response.data;
    
} catch (error) {
        console.log(error.message);
}
}

export const fetchMovieByKeyWord = async (query) => {
    try {
        const response = await axios.get(`/search/movie?query=${query}`);
        return response.data;
    
} catch (error) {
        console.log(error.message);
}
}

export const fetchMovieById = async (movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export const fetchCastById = async (movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}/credits`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export const fetchReviewById = async (movieId) => {
     try {
        const response = await axios.get(`/movie/${movieId}/reviews`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }  
}