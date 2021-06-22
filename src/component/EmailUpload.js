import React from 'react'


function formSubmit(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this);


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