// BOTH WORK TOGETHER BUT THE EMAIL IS NOT GETTING ANY INFO







import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useRef from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef;
  console.log('hello')
  
  const sendEmail = (e) => {
    // e.preventDefault();
  

    emailjs.sendForm('service_aejadxf', 'template_fonglvd', form.current, '3yYZVuNYPo1KCexYf')
      .then((result) => {
          console.log(result.text);
          stopFOUC()
      }, (error) => {
          console.log(error.text);
      });
    }
  
  


  
  
  
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
    formInputs.forEach((formInput) => {
      if (formInput.value.length === 0) passedValidation = false;
    });

    if (
      !new RegExp("[A-Za-z0-9.]+@[A-Za-z0-9.]+.[A-Za-z0-9.]{1,10}").test(
        document.getElementById("email").value
      )
    ) {
      passedValidation = false;
    }

    if (document.querySelector("textarea").value.length === 0) {
      passedValidation = false;
    }

    if (passedValidation) {
      // Clear all fields
      formInputs.forEach((formInput) => {
        formInput.value = "";
      });

      document.querySelector("textarea").value = "";
      typeWriter();
      sendEmail();
      console.log('Man this be driving me crazy!')
    } else {
      alert("All fields are required!");
    }
  }

  return (






    
    <div className="contact-page">



{/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}













      <div className="contact-form">
        <div>
          <p>Contact Me!</p>
        </div>
        {/* <Form ref={form} onSubmit={sendEmail}> */}
        
        {/* <Form ref={form} onSubmit={sendEmail}> */}
        <Form ref={form} onSubmit={(event) => stopFOUC(event)}>


{/* g33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="John Smith" name="user_name" />
            <br></br>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="name@example.com"
              pattern="[A-Za-z0-9\.]+@[A-Za-z0-9\.]+\.[A-Za-z0-9\.]{1,10}"
              name="user_email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control name= "message" as="textarea" rows={5} />
          </Form.Group>
          <Button
            className="submit-btn"
            as="input"
            type="submit"
            value="Send"
          />
        </Form>
      </div>
    </div>
   ); 
}
