import React from 'react'
import './Contact.css'

const Contact = () => {
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
              />
            </p>
            <p className="user-email">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
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
              <button 
                className="submit-button" 
                type="submit"
                onClick={(e)=>{e.preventDefault()}}
              >
                SEND
              </button>
            </p>
          </form>
      </div>
    </div>
  )
}

export default Contact