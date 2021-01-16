import React, { Component } from 'react';

class CentreDetails extends Component {
    

    render() { 
        const {nextPage, handleChange} = this.props;
        return ( 
            <div>
                <form className="form">
                <h1 className="header">Sign Up</h1>
                    <input className="input" onChange={handleChange} placeholder="Centre Number" type="text" name="centreNumber"/>
                    <input className="input" onChange={handleChange} type="text" placeholder="Centre Name" name="centreName"/>
                    <label className="label">
                    Type Of School:
                    </label>
                    <select className="selector" name="type" onChange={handleChange}>
                        <option value="Private">Private</option>
                        <option value="Government">Government</option>
                        <option value="Community">Community</option>
                    </select>
                    <button className="button" onClick={nextPage}>Next</button>
                    
                </form>
            </div>
         );
    }
}
 
export default CentreDetails;