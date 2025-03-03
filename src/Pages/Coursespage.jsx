
import React, { useState } from "react";
import Layout from "../Components/Layout";
import CourseCard from "../Components/CourseCard";
import CartModal from "../Components/CartModal";
import LoginModal from "../Components/LoginModal";

const CoursesPage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCartClick = () => {
    setShowCart((prev) => !prev);
  };

  const addToCart = (course) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === course.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...course, quantity: 1 }];
      }
    });

    setShowCart(true); // ✅ Open cart after adding an item
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setShowCart(true); // ✅ Open cart immediately after login
  };

  return (
    <Layout cart={cart} onCartClick={handleCartClick}>
      <CourseCard addToCart={addToCart} />

      {showCart && (
        <CartModal
          cart={cart}
          onClose={handleCartClick}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
        />
      )}

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </Layout>
  );
};

export default CoursesPage;
