import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from '../images/logo.svg'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar">
                <div className="logo">
                    <div className="image">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/trending'>Trends</Link>
                <Link to='/notifications'>Notifications</Link>
                <Link to='/messages'>Messages</Link>
                </div>
                <div className="avatar-container">
                    <div className="avatar"></div>
                </div>
            </div>
         );
    }
}
 
export default Navbar;