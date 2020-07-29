import React from 'react';
import {connect} from 'react-redux';

const MyList = ({imdbID, Title, Poster, Type, Year, removeMylist}) => {
    return (
            <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                <img className="w2 h2 w3-ns h3-ns br-100" src={Poster} />
                <div className="pl3 flex-auto">
                    <span className="f6 db black-70">{Title}</span>
                    <span className="f6 db black-70"></span>
                </div>
                <div className="pl3 flex-auto">
                    <button onClick={() => removeMylist(imdbID)}>Remove</button>
                </div>
            </li>
    )
}

export default connect(null)(MyList);