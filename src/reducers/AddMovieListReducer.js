import { ADD_MY_LIST, ADD_WATCH_LIST} from '../actions/MovieListActionType';

const initialState = [{
    imdbID:'123',
    Title:'dsfsdf',
    Poster:'sdfsdf',
    Type:'fdsfsd',
    Year:'53w5'
}]

export default (state = initialState, action={}) => {
    switch(action.type){
        case ADD_MY_LIST:
            return {
                ...state
            }
        case ADD_WATCH_LIST:
            return {
                ...state
            }
        default:
            return state
    }
}