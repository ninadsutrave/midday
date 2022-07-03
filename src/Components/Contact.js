import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {

  const submitEmail = (e) => {

    e.preventDefault()

    // emailjs.sendForm('gmail', 'template_ijlhyl4', e.target, 'i5YXv0eeibdkR8jS1')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

    console.log(e.target)
  }

  return (
    <div className="Contact">
      <h3>DROP ME A HELLO?</h3>
      <div className="contact-box">
        <form className="form">
            <p className="user-name">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                autoComplete="false"
                required
              />
            </p>
            <p className="user-email">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                required
              />
            </p>
            <p className="user-message">
              <label>Message</label>
              <textarea 
                name="message" 
                rows="5"
              ></textarea>
            </p>
            <p class="full">
              <input 
                className="submit-button" 
                type="submit"
                onClick={submitEmail}
                value="SEND"
              />
            </p>
          </form>
      </div>
    </div>
  )
}

export default Contact