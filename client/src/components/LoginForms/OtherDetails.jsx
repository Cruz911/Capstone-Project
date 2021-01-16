import React, { Component } from 'react';
import './SignIn.css';
import back from "../assets/images/back.svg"

class OtherDetails extends Component {

    render() { 
        const {previousPage, handleChange, handleSubmit} = this.props;
        return ( 
            <div>
                <form className="form">
                <div class="back">
                    <img src={back} alt=''/>
                    <p onClick={previousPage}>Back</p>
                </div>  
                <h2 className="header">Email & Password</h2>
                <input className="input" onChange={handleChange} type="text" placeholder="Email" name="Email"/>
                <input className="input" type="password" onChange={handleChange} placeholder="Enter Password" name="password"/>
                <input className="input" type="password" onChange={handleChange} placeholder="Confirm Password" name="password"/>
                <button onClick={handleSubmit} className="button">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default OtherDetails;