import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css/Courses.css"; // Custom CSS

const services = [
  {
    title: "Angular",
    description: "Master Angular & build dynamic web apps with components, services, and advanced features!",
    icon: "bi bi-activity",
    delay: "100",
  },
  {
    title: "Java",
    description: "Master Java & build powerful applications with OOP, data structures, and advanced features!",
    icon: "bi bi-bounding-box-circles",
    delay: "200",
  },
  {
    title: "Data Science",
    description: "Learn Data Science & unlock insights with Python, machine learning, and AI-driven analytics!",
    icon: "bi bi-calendar4-week",
    delay: "300",
  },
  {
    title: "Full-Stack Web Development",
    description: "Learn front-end & back-end technologies to build dynamic web applications!",
    icon: "bi bi-broadcast",
    delay: "400",
  },
];

const FeaturedServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section id="featured-services" className="featured-services section">
        
      <div className="container">
      <div className="Sectionheding" data-aos="fade-up"><h2>Our Courses</h2></div>
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={service.delay}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>
                  <a  className="stretched-link">
                    {service.title}
                  </a>
                </h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
