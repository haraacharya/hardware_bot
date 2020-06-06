import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
       <div>
       
            <nav className="red" style={{padding: "0px 10px"}}>
                <div className="nav-wraper">
                    <Link to={'/'} className="brand-logo">FunFactor</Link>
                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
            </nav>
            <ul id="mobile-demo" className="sidenav">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
       
    )
}



export default Header;