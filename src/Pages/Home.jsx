
import Layout from '../Components/Layout'; 
import Courses from '../Components/Courses'; 
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import '../Css/Home.css';
const aboutImg1 = "/Homepage/Aboutsection/about-company-1.jpg";
const aboutImg2 = "/Homepage/Aboutsection/about-company-2.jpg";
const aboutImg3 = "/Homepage/Aboutsection/about-company-3.jpg";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    
    return (
        <>
        <Layout>
        <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center content">
          {/* Left Section - Text & Stats */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h2>Empowering Learning Through Innovation</h2>
            <p className="lead">
            Transform your career with our expertly designed courses, blending creativity and technology to provide cutting-edge education.
            </p>

            {/* Call to Action Buttons */}
            <div className="cta-buttons" data-aos="fade-up" data-aos-delay="300">
              <a href="/courses" className="btn btn-primary">
                View Courses
              </a>
              <a href="/contact" className="btn btn-outline">
                Let's Connect
              </a>
            </div>

            {/* Stats Section */}
            {/* <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div> */}
          </div>

          {/* Right Section - Image */}
          <div className="col-lg-6">
            <div className="hero-image">
              
              <img src={`${process.env.PUBLIC_URL}/Homepage/Heroimg/profile-1.webp`} alt="Hero Image" className="img-fluid" />

             
              
              <div className="shape-1"></div>
              <div className="shape-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
    <div><Courses/></div>
    </section>

    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p className="who-we-are">Who We Are</p>
            <h3>Unlock Your Potential with Expert-Led Learning</h3>
            <p className="fst-italic">
            Expand your knowledge and skills with our expertly designed courses. Learn from industry professionals and gain hands-on experience to excel in your career.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i>
                <span>
                Comprehensive, structured lessons for all skill levels
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <span>
                Interactive and engaging learning experience
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <span>
                Practical projects and real-world applications
Join thousands of learners and start your journey towards success today!
                </span>
              </li>
            </ul>
            <a href="/about" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">
              <div className="col-lg-6">
                <img src={aboutImg1} className="img-fluid" alt="About 1" />
              </div>
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <img src={aboutImg2} className="img-fluid" alt="About 2" />
                  </div>
                  <div className="col-lg-12">
                    <img src={aboutImg3} className="img-fluid" alt="About 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="call-to-action" className="call-to-action section dark-background">
    <img src="/Homepage/Aboutsection/cta-bg.jpg" alt="Call to Action" />


      <div className="container">
        <div className="row justify-center" data-aos="zoom-in" data-aos-delay="100">
          <div className=" col-lg-12 col-xl-10">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a className="cta-btn" href="#">Call To Action</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
        </>
    )
    

}; export default Home;