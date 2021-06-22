import emailjs from "emailjs-com";
import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zx7pmmb",
        "template_6jdyjx8",
        e.target,
        "user_r1Nh9imI9RSZL9FOKL67l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
  }

  return (
    <div className='request__container'>
      <fieldset>
        <legend>Contact Us!</legend>
        <form className='request__form' onSubmit={sendEmail}>
          <div className='request__row'>
            <label HTMLfor='f_name' className='request__label'>
              First Name:{" "}
              <input className='request__input' type='text' name='f_name' />
            </label>
            <p>
            <label HTMLfor='l_name' className='request__label'>
              Last Name:{" "}
              <input className='request__input' type='text' name='l_name' />
            </label>
            </p>
            <p>
              <label HTMLfor='tel' className='request__label'>
              <i class="fas fa-phone-square"></i>{" "}
                <input className='request__input' type='tel' id='tel' name='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='###-###-####' />
              </label>
            </p>
            <p>
              <label HTMLfor='email' className='request__label'>
              <h5><i class="fas fa-at"></i>email.com</h5>{" "}
                <input className='request__input' type='email' name='email' />
              </label>
            </p>
            <p>
              <label HTMLfor='message' className='request__label'>
                Message: <textarea cols='20' rows='10'maxlength='500' name='message' placeholder='including details such as sizes and quantities will help us help you faster' />
              </label>
            </p>
            <label>Attach file:</label>
    <input type="file" name="my_file"/> 
    <input type="submit" value="Submit"/>
            <p>
              <input type='submit' name='submit' />
              <input type='reset' name='reset' />
            </p>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
