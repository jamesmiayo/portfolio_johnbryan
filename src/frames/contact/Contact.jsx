import React, { useRef } from 'react';
import './contact.css';
import { MdCall } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mgf44k4',
        'template_57051to',
        form.current,
        'S_CR-rys1DaoZRbbl'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="container container__contact">
        <div className="mail__container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder=" Full Name"
              required
              className="text-email"
            />
            <input
              type="email"
              name="email"
              placeholder=" Email"
              required
              className="text-email"
            />
            <textarea
              name="message"
              rows="7"
              placeholder=" Message"
              required
              className="textarea-email"
            ></textarea>
            <button type="submit" className="btn_sendmail">
              SEND
            </button>
          </form>
        </div>

        <article className="contact__option">
          <h4>Architect John Bryan Miayo</h4>
          <div className="contact__icon">
            <ImLocation className="contact__option-icon" size={25} />
            <small className="small-text">Napico Manggahan Pasig City</small>
          </div>
          <div className="contact__icon">
            <MdCall className="contact__option-icon" size={25} />
            <small className="small-text">12321321321312</small>
          </div>
          <div className="contact__icon">
            <MdOutlineEmail className="contact__option-icon" size={25} />
            <small className="small-text">jbmiayo@yahoo.com</small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
