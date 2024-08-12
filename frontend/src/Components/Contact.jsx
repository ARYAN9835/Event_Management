import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/message/send",
        {
          name,
          email,
          subject,
          message
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
  
      // Access response data using res.data
      toast.success(response.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      Navigate("./signin")
      toast.error(error.response?.data?.message || "An error occurred");
      console.error(error);
    }
  };
  

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Dehradun,Uttarakhand</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91987654321</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>eventspark@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.5141983525396!2d78.03814681555292!3d30.316494381786155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3907fbf9584b0091%3A0xc13feda9910e5f6!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1648243799259!5m2!1sen!2sin"
              style={{ border: "0", width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>


          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>BOOKING FORM</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Write brief description"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;