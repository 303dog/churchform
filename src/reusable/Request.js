import React, { useState } from 'react';
import './Request.css';
import { Link, useHistory } from "react-router-dom";






class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {form: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  
    handleChange = (event) => {
      this.setState({email: event.target.email});
      this.setState({l_name: event.target.l_name});
      this.setState({f_name: event.target.f_name});
      this.setState({comment: event.target.comment});
      this.setState({upload: event.target.upload});
      this.setState({p_number: event.target.p_number})
    }
  
    handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div classsName="request__container" >
            <div className='request__container' >
                <h1>Request Form </h1>

                <form>
                <h5>First Name</h5>
                <input type="text" id='fName' className='text' value={this.state.f_name} onChange={this.handleChange} />

                <h5>Last Name</h5>
                <input type="text" id='lName' value={this.state.l_name}  onChange={this.handleChange} />

                <h5>Phone Number</h5>
                <small>Format: 123-456-7890</small>
                <input type="tel" id='phone' value={this.state.p_number} placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={this.handleChange} />

                <h5>Email Address</h5>
                <small>Format: user@email</small>
                <input type="email" class='form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0' id='email' value={this.state.email} onChange={this.handleChange} />

                <h5>How can we help you?</h5>
                <textarea rows="4" cols="50" name="comment" form="request" maxLength="500">
                Enter your request here...</textarea>

            <div className='request__upload'>
                 <h5>Upload your file here</h5>
                 <i><h6>acceptable format(jpeg, png, pdf, jfif)</h6></i>
                 <input type="file" accept='image/*,.pdf' id='file' value={this.state.upload} onChange={this.handleChange} />
            </div>
                <br></br>
                <button type='submit' onClick={''} className='request__submitButton'>Submit Request</button>
               </form>
          </div>
      </div>
      )
    }
  }

  export default Request;


