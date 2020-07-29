import {combineReducers} from 'redux';
import MovieListReducer from './MovieListReducer';
import AddMovieListReducer from './AddMovieListReducer';

export default combineReducers({
    MovieListReducer,
    AddMovieListReducer
});


