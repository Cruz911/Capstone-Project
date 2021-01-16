import React, { Component } from 'react';
import CentreDetails from './CentreDetails';
import LocationDetails from './LocationDetails'
import OtherDetails from './OtherDetails'
import SignUpSubmit from '../api/SignUpSubmit';

class SignUp extends Component {
    state = { 
        centreNumber: '',
        centreName: '',
        email: '',
        province: '',
        district: '', 
        type: '', 
        password: '',
        stage: 1
     }

    nextPage = () =>{
        this.setState({stage: this.state.stage + 1})
    }

    previousPage = () =>{
        this.setState({stage: this.state.stage - 1})
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e =>{
        e.preventDefault();
        const data = this.state
        SignUpSubmit.signingUp(data)
    }
     
    render() { 
        const {stage} = this.state;

        switch(stage){
            case 1:
                return <CentreDetails handleChange={this.handleChange} nextPage={this.nextPage} />
            case 2:
                return <LocationDetails handleChange={this.handleChange} province={this.state.province} nextPage={this.nextPage} previousPage={this.previousPage} />
            case 3:
                return <OtherDetails handleChange={this.handleChange} handleSubmit={this.handleSubmit}  previousPage={this.previousPage} />
            default:
                return <CentreDetails handleChange={this.handleChange} nextPage={this.nextPage}/>
        }
        
    }
}
 
export default SignUp;