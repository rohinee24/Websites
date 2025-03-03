
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartModal from "./CartModal"; // ✅ Import CartModal
import "../Css/Header.css";

const Header = ({ cartItems = [], onCartClick, showCart }) => {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ State for toggling navbar

  return (
    <header className="header">
      <div className="container-fluid">
        {/* ✅ Small & Medium Screen Navbar */}
        <div className="row align-items-center py-2 d-lg-none d-flex justify-content-between">
          {/* ✅ Logo */}
          <div className="col-auto">
            <div className="logo">
              <a href="/">ShopLogo</a>
            </div>
          </div>

          {/* ✅ Cart Icon */}
          <div className="col-auto">
            <button onClick={onCartClick} className="cart-button">
              <i className="bi bi-cart-plus"></i> ({cartItems.length})
            </button>
          </div>

          {/* ✅ Navbar Toggler */}
          <div className="col-auto">
            {/* <button
              className="navbar-toggler"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="col-auto">
            <i 
              className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} menu-icon`} 
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </div>

          </div>
        </div>

        {/* ✅ Collapsible Menu for Small & Medium Screens */}
        {menuOpen && (
          <div className="row">
            <div className="col-12">
              <nav className="navbar">
                <ul className="navbar-nav text-center">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/courses">Courses</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Large Screen Navbar */}
      <div className="row align-items-center d-none d-lg-flex">
        <div className="col-md-4 col-lg-4 text-start">
          <div className="logo">
            <a href="/">Logo</a>
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <nav className="navbar navbar-expand-lg">
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/courses">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* ✅ Cart Button (No Changes) */}
        <div className="col-md-2 col-lg-2 text-end">
          <div className="cart-wrapper">
            <button onClick={onCartClick} className="cart-button">
              🛒 Cart ({cartItems.length})
            </button>

            {/* ✅ Show cart dropdown below the button */}
            {showCart && <CartModal cart={cartItems} onClose={onCartClick} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
