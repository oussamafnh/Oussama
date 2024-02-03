import React, { useState } from "react";
import { useForm } from '@formspree/react';
import '../../style/sec3.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mrgwbejg');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);
    const form = document.getElementById("form-container"); // Replace with your actual form id
    form.reset();
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <>
      <div className="sec3"  id="contact">
        <div className="title">
          <p>Let's work together</p>

          {/* <div class="container">
            <div class="box">

              <div class="title">
                <span class="block"></span>
                <h1>Let's work together</h1>
              </div>

            </div>
          </div> */}


        </div>
        <div className="content">
          <div className="leftside">
            <form className="form-container" id="form-container" onSubmit={(e) => { handleSubmit(e); handleSuccess(); }}>

              <div className="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    required
                    name="name"
                    id="name"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    name="email"
                    id="email"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Leave A Message</label>
                  <textarea
                    required
                    cols="50"
                    rows="10"
                    id="message"
                    name="message"
                  />
                </div>
                {isSuccess ? (
                  <div className="succeededmsg">
                    <p>Your message has been received. Have a great day!</p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="form-submit-btn"
                  >
                    Send
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="rightside"></div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
