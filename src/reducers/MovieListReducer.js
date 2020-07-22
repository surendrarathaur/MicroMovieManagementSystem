import { MOVIE_LIST, MOVIE_LIST_FILTER} from '../actions/MovieListActionType';

const initialState = {
    movielist:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case MOVIE_LIST:
            return {
                ...state,
                movielist:action.payload
            }
        case MOVIE_LIST_FILTER:
            return {
                ...state,
                movielist:action.payload
            }
        default:
            return state
    }
}