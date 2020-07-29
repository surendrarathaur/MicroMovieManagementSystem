import { MOVIE_LIST, MOVIE_LIST_FILTER} from './MovieListActionType';
import Axios from 'axios';

export const getMovieList = () => {
    return (dispatch) => {
        return Axios.get(`http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad`)
                .then((response) => dispatch({type:MOVIE_LIST, payload:response.data.Search}));
    }
}

export const getMovieListFilter = (year) => {
    return (dispatch) => {
        return Axios.get(`http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad&y=${year}`)
                .then((response) => dispatch({type:MOVIE_LIST_FILTER, payload:response.data.Search}));
    }
}
