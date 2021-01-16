import React, { Component } from "react";
import back from "../assets/images/back.svg"

class LocationDetails extends Component {
  

  render() {
    const {nextPage, handleChange, previousPage}= this.props;
    return (
      <div>
        <form className="form">
        <div className="back">
          <img src={back} alt=''/>
          <p onClick={previousPage}>Back</p>
        </div>    

          <h2 className="header">Location</h2>
          <label className='label'>Province:</label>
          <select className='selector' name="province" value={this.props.province} onChange={handleChange}>
            <option value="Mash. Central">Mash. Central</option>
            <option value="Harare">Harare</option>
            <option selected value="Bulawayo">Bulawayo</option>
            <option value="Mash. West">Mash. West</option>
            <option value="Mash. East">Mash. East</option>
            <option value="Masvingo">Masvingo</option>
            <option selected value="Manicaland">Manicaland</option>
            <option value="Mat. North">Mat. North</option>
            <option value="Mat. South">Mat. South</option>
            <option value="Midlands">Midlands</option>
          </select>


          <label className='label'>District:
          </label>
          {/* <button className="button">Back</button> */}
          <button onClick={nextPage} className="button">Next</button>
        </form>
      </div>
    );
  }
}

export default LocationDetails;
