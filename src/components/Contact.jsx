import React, { useState } from "react";
import "../styles/contact.css";
import { toast } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjects, setSubjects] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      toast.success("Message Sent");

      // Clear the form fields after successful submission
      setName("");
      setEmail("");
      setSubjects("");
      setMessage("");
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <div id="contact">
      <div className="section--header">
        <h1 className="section--heading">Contact Us</h1>
        <span className="section--slogan">let's get in touch</span>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your name"
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Subjects"
              required
              name="subjects"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your message"
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
