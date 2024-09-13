import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_URL;
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }
    try {
      const response = axios.post(url, {
        name,
        email,
        message,
      });
      setLoading(false);
      console.log(response);
      setName("");
      setEmail("");
      setMessage("");
      alert("message sent successfully");
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="contact">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} action="" className="contactForm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
          {loading && <p>Submitting...</p>}
        </form>
      </div>
    </>
  );
}

export default Contact;
