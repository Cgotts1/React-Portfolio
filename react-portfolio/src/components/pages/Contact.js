import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  function stopFOUC(event) {

    var i = 0;
    var txt = "Thank you! You're form was submitted.";
    var speed = 50;
    
    function typeWriter() {
      if (i < txt.length) {
        document.querySelector(".submit-btn").value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } 
    }


    event.preventDefault();
    let passedValidation = true;

    const formInputs = document.querySelectorAll("input");
    formInputs.forEach(formInput => {
      if (formInput.value.length === 0)
        passedValidation = false;
    })

    if (!(new RegExp("[A-Za-z0-9\.]+@[A-Za-z0-9\.]+\.[A-Za-z0-9\.]{1,10}")).test(document.getElementById("email").value)) {
      passedValidation = false;

    }

    if (document.querySelector("textarea").value.length === 0) {
      passedValidation = false;
    }

    if (passedValidation) {
      // Clear all fields
      formInputs.forEach(formInput => {
        formInput.value = "";
      })

      document.querySelector("textarea").value = "";

      // alert("Form submitted. Thanks for contacting me!")
      // document.querySelector(".submit-btn").value = "Thank you!";
      typeWriter()
    } else{

      alert("All fields are required!")

    }
  }

  return (
    <div className='contact-page'>

      <div className='contact-form'>
        <div>
          <p>Contact Me!</p>
        </div>
        <Form onSubmit={(event) => stopFOUC(event)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="input" placeholder="John Smith" />
            <br></br>
            <Form.Label>Email address</Form.Label>
            <Form.Control id="email" type="email" placeholder="name@example.com"
              pattern="[A-Za-z0-9\.]+@[A-Za-z0-9\.]+\.[A-Za-z0-9\.]{1,10}"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Button className='submit-btn' as="input" type="submit" value="Submit"/>
        </Form>

      </div>
    </div>
  );
}
