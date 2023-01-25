import React, { useState , useRef} from 'react';
import emailjs from "@emailjs/browser";
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import InputForm from './Input';

import './Footer.scss';

const Footer = () => {

const [isFormSubmitted, setIsFormSubmitted] = useState(false);

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  setIsFormSubmitted(true);
  emailjs
    .sendForm(
      "service_1xmceaj",
      "template_okbhfvq",
      form.current,
      "YUKUZbLK0nNWnS0gm"
    )
    
};

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="ahmedgsalem93@gmail.com" className="p-text">
            ahmedgsalem93@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+491789368935" className="p-text">
            +491789368935
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="app__footer-form app__flex"
        >
          <InputForm
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="username"
            pattern="/^[a-Za-z]+$/"
            errorMessage="name should be more than 3 characters and shouldn\'t include any special character!"
          />
          <InputForm
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            errorMessage="It should be a valid email address!"
          />

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <input type="submit" value="Send Message" className="p-text" />
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whiteBg"
);

