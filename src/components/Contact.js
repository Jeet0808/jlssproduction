import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
