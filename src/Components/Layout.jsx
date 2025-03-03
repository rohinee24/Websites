import React from "react";
import Header from "./Header";

const Layout = ({ children, cart, onCartClick }) => {
  return (
    <>
      {/* ✅ Header included here only once */}
      <Header cartItems={cart} onCartClick={onCartClick} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
