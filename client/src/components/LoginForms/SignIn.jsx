import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./SignIn.css"

class SignIn extends Component {
    state = { 
        centreNumber: '',
        password: ''
     }

    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value})
    } 


    onClick = (e) => {
        e.preventDefault();
        const {centreNumber, password} = this.state;
        console.log(centreNumber);
        console.log(password);
    }


    render() { 
        return ( 
            <div>
                    <form className="form">
                        <h1 className="header">Sign In</h1>
                        <input className="input" placeholder="Enter Centre Number" onChange={this.onChange} name="centreNumber" value={this.state.centreNumber}/>
                        <input className="input" type="password" placeholder="Password" onChange={this.onChange} name="password" value={this.state.password}/>
                        <button className="button" onClick={this.onClick}>Sign In</button>
                        <div className="myspan">
                            <span className="signup">Don't have an account? <Link to="/signup">Sign Up</Link></span>
                        </div>
                    </form>
                
            </div>
         );
    }
}
 
export default SignIn;