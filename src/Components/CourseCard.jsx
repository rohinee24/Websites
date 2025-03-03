import React from "react";
import '../Css/Coursespage.css';

const CourseCard = ({ addToCart }) => { // ✅ Receive addToCart as a prop
  const courses = [
    { id: 1, name: "React Basics", price: "10000", image: "/Coursespage/react.jpg", rating: 4.5 },
    { id: 2, name: "Advanced JavaScript", price: "20000", image: "/Coursespage/javascript.jpg", rating: 4.8 },
    { id: 3, name: "Full-Stack Development", price: "15000", image: "/Coursespage/fullstack.jpg", rating: 4.2 },
    { id: 4, name: "UI/UX Design", price: "25000", image:"/Coursespage/uiux.jpg", rating: 4.7 },
    { id: 5, name: "Python for Beginners", price: "7000", image: "/Coursespage/python.jpg", rating: 4.3 },
    { id: 6, name: "Data Science Essentials", price: "30000", image: "/Coursespage/data.jpg", rating: 4.6 },
    { id: 7, name: "Machine Learning", price: "29000", image: "/Coursespage/ml.jpg", rating: 4.9 },
    { id: 8, name: "Cybersecurity Fundamentals", price: "40000", image: "/Coursespage/csjpg.jpg", rating: 4.4 }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
      </>
    );
  };

  return (
    <div className="course-grid">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <img className="course-image" src={course.image} alt={course.name} />
          <div className="course-details">
            <h2 className="course-title">{course.name}</h2>
            <p className="course-description">An overview of the course content.</p>
            <div className="course-info">
              <span className="course-price">₹{course.price}</span>
              <span className="course-rating">{renderStars(course.rating)} ({course.rating})</span>
            </div>
            <button className="enroll-button" onClick={() => {
              console.log("Button clicked:", course);  // ✅ Debugging log
              addToCart(course);
            }}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
