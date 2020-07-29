import React from 'react';
import {connect} from 'react-redux';

const MyWatchList = ({imdbID, Title, Poster, Type, Year, removeMyWatchlist}) => {
    return (
            <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                <img className="w2 h2 w3-ns h3-ns br-100" src={Poster} />
                <div className="pl3 flex-auto">
                    <span className="f6 db black-70">{Title}</span>
                    <span className="f6 db black-70"></span>
                </div>
                <div className="pl3 flex-auto">
                    <button onClick={() => removeMyWatchlist(imdbID)}>Remove</button>
                </div> 
            </li>
    )
}

export default connect(null)(MyWatchList);