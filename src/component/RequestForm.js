import React, { useState } from "react";
import "./RequestForm.css";
import Upload from "./Upload";

export default function RequestForm() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = { "form-name": "contact", name, email, message };

    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data),
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch((error) => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      return setName(value);
    }
    if (name === "email") {
      return setEmail(value);
    }
    if (name === "message") {
      return setMessage(value);
    }
  };

  return (
    <>
      <div className='request__container'>
        <fieldset>
          <legend>Contact Us!</legend>
          <form onSubmit={handleSubmit} action='/thank-you/'>
            <div className='request__row'>
              <label>Name:</label>
            </div>
            <input
              className='request__input'
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
            />
            <div className='request__row'>
              <label>Email:</label>
            </div>
            <input
              className='request__input'
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <div className='request__row'>
              <label>Message:</label>
              <textarea
                className='request__input'
                name='message'
                value={message}
                onChange={handleChange}
              />
            </div>
          </form>
          <h5>{status}</h5>
        </fieldset>
      </div>
      <Upload />
    </>
  );
}
