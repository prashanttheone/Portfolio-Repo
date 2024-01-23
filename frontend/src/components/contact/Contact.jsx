import React, { useRef, useState } from 'react';
import axios from 'axios';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-sable-two.vercel.app/contact/save', formData, {
  withCredentials: true,}); 
  console.log('Success:', response.data);
      setMessage(true); // Set message state to display success message
      // You can also update the UI or reset the form if needed
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error, show error message, etc.
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kumarprashantyadav12@gmail.com</h5>
            <a href="mailto:merigogichashvili13@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span> Thanks, I'll reply ASAP </span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
