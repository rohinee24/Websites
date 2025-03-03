// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
// import Home from './Pages/Home';  // Correct path
// import Aboutus from './Pages/Aboutus'; // Use lowercase "shop"
// import Contact from './Pages/Contact'; // Use lowercase "shop"
// import Coursespage from './Pages/Coursespage'; // Use lowercase "shop"
// import "bootstrap-icons/font/bootstrap-icons.css";

// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           {/* Default redirect to /login when accessing / */}
//           <Route path="/" element={<Navigate to="/home" />} />
          
//           {/* Login route */}
//           <Route path="/home" element={<Home />} /> {/* This uses the Home component */}

//              <Route path="/shop" element={<Aboutus />} /> {/* Fixed capitalization */}
//              <Route path="/contact" element={<Contact />} /> {/* Fixed capitalization */}
//              <Route path="/courses" element={<Coursespage />} /> {/* Fixed capitalization */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
 import Home from './Pages/Home';  // Correct path
 import Aboutus from './Pages/Aboutus'; // Use lowercase "shop"
 import Contact from './Pages/Contact'; // Use lowercase "shop"
 import Coursespage from './Pages/Coursespage'; // Use lowercase "shop"
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cartItems, setCartItems] = useState([]); // Manage cart items

  // ✅ Function to add courses to the cart
  const addToCart = (course) => {
    setCartItems([...cartItems, course]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          {/* ✅ Pass addToCart as a prop to Coursespage */}
          <Route path="/courses" element={<Coursespage addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
