import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const submitEmail = (e) => {

    e.preventDefault()
    emailjs.sendForm('service_m99ifi7', 'template_ijlhyl4', form.current, 'i5YXv0eeibdkR8jS1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setFormDetails({
        name: "",
        email: "",
        message: ""
      })

  }

  return (
    <div className="Contact">
      <div className="contact-box">
        <h3 className="form-header">LET'S GET IN TOUCH!</h3>
        <form className="form" ref={form} onSubmit={submitEmail}>
            <p className="user-name">
              <input 
                type="text" 
                name="name" 
                value={formDetails.name}
                autoComplete="false"
                placeholder="Name"
                onChange={handleChange}
                required
              />
            </p>
            <p className="user-email">
              <input 
                type="email" 
                name="email" 
                value={formDetails.email}
                placeholder="Email ID"
                onChange={handleChange}
                required
              />
            </p>
            <p className="user-message">
              <textarea 
                name="message" 
                value={formDetails.message}
                placeholder="Message"
                onChange={handleChange}
                rows="5"
              ></textarea>
            </p>
            <p class="full">
              <input 
                className="submit-button" 
                type="submit"
                value="SEND"
              />
            </p>
          </form>
      </div>
    </div>
  )
}

export default Contact