// src/pages/ContactPage.jsx
import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      // ✅ Use your deployed backend URL here (Render / Railway)
      const res = await fetch("https://college-website-0zcl.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      e.target.reset();
    } catch (error) {
      alert("❌ Something went wrong. Please try again later.");
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <section className="contact-page-container">
      <h1 className="page-title">Contact Us</h1>
      <p className="subtitle">
        We’d love to hear from you. Reach out to us for any admission, academic,
        or general queries.
      </p>

      {/* --- Contact Info --- */}
      <div className="contact-info-grid">
        <div className="info-card">
          <h3>📍 Address</h3>
          <p>
            D.Y. Patil College of Engineering and Technology, <br />
            Kasaba Bawada, Kolhapur – 416006, Maharashtra, India
          </p>
        </div>

        <div className="info-card">
          <h3>☎️ Phone</h3>
          <p>+91 231 2601431 / 2601432</p>
          <p>Office Hours: 9 AM – 5 PM (IST)</p>
        </div>

        <div className="info-card">
          <h3>✉️ Email</h3>
          <p>
            <a href="mailto:principal@coek.dypgroup.edu.in">
              principal@coek.dypgroup.edu.in
            </a>
          </p>
          <p>
            <a href="mailto:info@coek.dypgroup.edu.in">
              info@coek.dypgroup.edu.in
            </a>
          </p>
        </div>
      </div>

      {/* --- Contact Form --- */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {/* --- Google Map Embed --- */}
      <div className="map-container">
        <iframe
          title="DY Patil College of Engineering & Technology Kolhapur"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.630829640476!2d74.25052417452997!3d16.84317468392458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1006d1abcf32b%3A0x262a0b071a13e1b!2sD.Y.%20Patil%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1709811762005!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
