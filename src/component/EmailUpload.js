import React from 'react'
import emailjs from "emailjs-com";


export default function formSubmit() {
    function sendEmail(e) {
    emailjs.sendForm('service_zx7pmmb', 'template_6jdyjx8', this);
    }

return(
    <div className='auto__container'>
<form enctype="multipart/form-data" method="post" onsubmit="formSubmit()">
    <label>Attach file:</label>
    <input type="file" name="my_file"/> 
    <input type="submit" value="Submit"/>
</form>
</div>
)
}