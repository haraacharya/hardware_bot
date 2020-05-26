import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
       
        <nav className="red" style={{padding: "0px 10px"}}>
            <div className="nav-wraper">
                <Link to={'/'} className="brand-logo">FunFactor</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
       
    )
}

export default Header;