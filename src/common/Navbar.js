import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="sans-serif">
            <div className="cover bg-left bg-center-l">
                <div className="bg-black-80 pb6-m">
                <nav className="dt w-100 mw8 center">
                    <div className="dtc w2 v-mid pa3">
                        <a href="/" className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba">Micro Movie Management</a>
                    </div> 
                    <div className="dtc v-mid tr pa3">
                        <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/" >Movie List</Link> 
                        <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/mylist" >My Movie List</Link>                      
                    </div>
                </nav> 
                </div>
            </div> 
            </header>
    )
}

export default connect(null)(Navbar);