import React, { useEffect, useState } from "react";
import Layout from '../Components/Layout'; 
import AOS from "aos";
import "aos/dist/aos.css";

import '../Css/Contact.css';
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent. Thank you!");
  };

  return (
    <>
          <Layout>
      {/* Page Title Section */}
      <div className="page-title dark-background" style={{ backgroundImage: "url(/Homepage/Aboutsection/page-title-bg.jpg)" }}>
        <div className="container position-relative">
          <h1>Contact</h1>
          <nav className="breadcrumbs">
            {/* <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Contact</li>
            </ol> */}
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Address */}
            <div className="col-lg-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          {/* Google Maps and Contact Form */}
          <div className="row gy-4 mt-1">
            {/* Google Maps */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <iframe 
  src="https://example.com" 
  title="External contact form" 
  width="600" 
  height="400" 
/>

            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="400">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                  </div>

                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                  </div>

                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
      </Layout>
    </>
  );
};

export default Contact;
