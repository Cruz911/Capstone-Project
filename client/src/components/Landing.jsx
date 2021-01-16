import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import book from './assets/images/staff.svg'
import './Landing.css'

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='page'>
                <div className="left">
                    <h1 className="header">Welcome</h1>
                    <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro labore excepturi quisquam vel. Voluptatem esse repudiandae dicta minus laborum,
                    unde, maiores nulla reprehenderit debitis dolor soluta quasi, blanditiis illo error.</p>
                    <Link to="/signup"><button className="button">Register</button></Link>
                  </div>
                  <div className='right'>
                    <img src={book} alt="books" className="book"/>
                  </div>
            </div>
         );
    }
}
 
export default Landing;