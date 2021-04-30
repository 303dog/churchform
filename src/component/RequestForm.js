import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./RequestForm.css";

export default function RequestForm() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = { "form-name": "contact", name, email, message, file };

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
    <div className='request__container'>
      <form onSubmit={handleSubmit} action='/thank-you/'>
        <div clasName='request__row'>
          <div className='col-25'>
            <label>NEEDS REDONE AND UPLOAD SWITCHED OUT:</label>
          </div>
          <div className='col-75'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='request__row'>
          <div className='col-25'>
            <label>Email:</label>
          </div>
          <div className='col-75'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div clasName='request__row'>
          <div className='col-25'>
            <label>Message:</label>
          </div>
          <div className='col-75'>
            <textarea name='message' value={message} onChange={handleChange} />
          </div>
        </div>
        <div className='request__file'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>
              Drag file here 📂
              <br />
              <br />
              Click 🔘 to select files
            </p>
          )}
        </div>
        </div>
        <div className='request__row'>
          <button type='submit'>Send</button>
        </div>
      </form>
      <h3>{status}</h3>
    </div>
  );
}
