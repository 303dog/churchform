import React from 'react'
import './RequestForm.css'


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='request__container'>
          <fieldset>
          <legend>Contact Us!</legend>
          <form onSubmit={this.handleSubmit}>
          <div className='request__row'>
          <label className='request__label'>
            Your Name: <input className='request__input'  type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        <p>
          <label className='request__label'>
            Your Email: <input className='request__input' type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label className='request__label'>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>

        </div>
      </form>
        </fieldset>
      </div>
    );
  }
}

export default RequestForm;