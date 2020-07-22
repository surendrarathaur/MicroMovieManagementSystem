import {connect} from 'react-redux';

const MoviLists = (props) => {
    console.log('Functional :',props.movieLists)
}

export default connect(null)(MoviLists);