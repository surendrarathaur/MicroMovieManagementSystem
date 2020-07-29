import React from 'react';
import {connect} from 'react-redux';

const MoviLists = ({imdbID, Title, Poster, Type, Year, addMylist, addWatchlist}) => {
    return (
        <article className="mw5 center bg-white br3 pa3 mv3 ba b--block-10">
            <input type="checkbox" name="mId" value={imdbID} />&nbsp;
            <button onClick={() => addWatchlist({imdbID, Title, Poster, Type, Year})} className="f6 link dim vr3 ph3 pv2 mb2 dib white bg-dark-green">Add To Watch List</button>
            <div className="tc" >
                    <h6 className="">{Title}</h6>
                    <img src={Poster} alt={Title} className="br-100 h4 w4 dib ba b--block-05 pa2"/>
                    <h6 className="">{Year}</h6>                     
                    <button onClick={() => addMylist({imdbID, Title, Poster, Type, Year})} className="f6 link dim vr3 ph3 pv2 mb2 dib white bg-dark-green">Add To My List</button>
            </div>
        </article>
    )
}

export default connect(null)(MoviLists);