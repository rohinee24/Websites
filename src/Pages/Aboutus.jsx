

import React, { useEffect } from "react";
import Layout from '../Components/Layout'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Import
import AOS from "aos";
import "aos/dist/aos.css";
import '../Css/Aboutus.css';
import { Link } from "react-router-dom";
const aboutImg = "/Homepage/Aboutsection/about-company-1.jpg"; // Adjust the path as per your project structure

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
            <Layout>
      {/* Page Title Section */}
      <div className="page-title dark-background" style={{ backgroundImage: "url(/Homepage/Aboutsection/page-title-bg.jpg)" }}>
        <div className="container position-relative">
          <h1>About</h1>
          <nav className="breadcrumbs">
            {/* <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">About</li>
            </ol> */}
          </nav>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
        <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
        
      </div>
          <div className="row position-relative">
            <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={aboutImg} alt="About" />
            </div>

            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <h2 className="inner-title">Consequatur eius et magnam</h2>
              <div className="our-story">
                <h4>Est 1988</h4>
                <h3>Our Story</h3>
                <p>
                  Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. 
                  Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur 
                  laudantium temporibus dicta minus dolor.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                </ul>
                <p>
                  Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus 
                  porro in quo eveniet. Molestias in maxime doloremque.
                </p>

                <div className="watch-video d-flex align-items-center position-relative">
                  <i className="bi bi-play-circle"></i>
                  <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox stretched-link">
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default About;
