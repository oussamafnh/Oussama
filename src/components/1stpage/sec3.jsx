import React, { useState } from "react";
import { useForm } from '@formspree/react';
import '../../style/sec3.css';
import { XTwitter } from "../../assets/svgs/socials/x";
import { Linkedin } from "../../assets/svgs/socials/linkedin";
import { Github } from "../../assets/svgs/socials/github";

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
      <div className="sec3" id="contact">
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
          <div className="rightside">
            <div className="contactinfos">

              <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg><p> oussamafannah4@gmail.com</p> </div>
              <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="phone"><g data-name="Layer 2"><g data-name="phone-call"><path d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"></path><path d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2zm8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73z"></path></g></g></svg><p> +212 687953709</p> </div>

            </div>

            <div className="social">

              <p>Connect with me on social media!</p>
              <div className="socials">
                <a href="https://www.linkedin.com">
                  <Linkedin />
                </a>
                <a href="https://twitter.com">
                  <XTwitter />
                </a>
                <a href="https://github.com">
                  <Github />
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
