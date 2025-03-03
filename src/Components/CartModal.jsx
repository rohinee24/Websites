
// import React from "react";
// import '../Css/CartModal.css';

// const CartModal = ({ cart, onClose, removeFromCart, increaseQuantity }) => {
//   // Calculate order total
//   const orderTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50; // Assuming ₹50 delivery charge

//   return (
//     <div className="cart-dropdown">
//       <div className="cart-content">
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Course</th>
//                   <th>Price</th>
//                   <th>Qty</th>
//                   <th>Subtotal</th>  {/* ✅ Added individual item subtotal */}
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((item) => (
//                   <tr key={item.id}>
//                     <td>{item.name}</td>
//                     <td>₹{item.price}</td>
//                     <td>{item.quantity}</td>
//                     <td>₹{item.price * item.quantity}</td> {/* ✅ Subtotal for each item */}
//                     <td>
//                       <i
//                         className="bi bi-plus-square text-success mx-2"
//                         onClick={() => increaseQuantity(item.id)}
//                         style={{ cursor: "pointer", fontSize: "1.2rem" }}
//                       ></i>

//                       <i
//                         className="bi bi-trash3 text-danger"
//                         onClick={() => removeFromCart(item.id)}
//                         style={{ cursor: "pointer" }}
//                       ></i>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* ✅ Order Total Section */}
//             <div className="cart-summary">
//               <p>Delivery: ₹50</p>
//               <h4 className="tord">Order Total: ₹{orderTotal}</h4>
//             </div>

//             {/* ✅ Proceed to Buy Button */}
//            {/* ✅ Flexbox wrapper for buttons */}
// <div className="cart-buttons">
//   <button className="proceed-btn">Proceed to Buy</button>
//   <button onClick={onClose} className="close-btn">Close</button>
// </div>

//           </>
//         )}
        
//       </div>
//     </div>
//   );
// };

// export default CartModal;
import React, { useState } from "react";
import "../Css/CartModal.css";
import CheckoutModal from "./CheckoutModal";

const CartModal = ({ cart, onClose, removeFromCart, increaseQuantity }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(true);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const onCloseCart = () => {
    setIsCartModalOpen(false); // Closes only the cart modal
    onClose(); // Calls parent function to close modal
  };

  const onProceedToPay = () => {
    setIsCartModalOpen(false);  // Close the cart modal
    setIsCheckoutModalOpen(true);  // Open the checkout modal
  };

  return (
    <>
      {/* Cart Modal */}
      {isCartModalOpen && (
        <div className="cart-dropdown">
          <div className="cart-content">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>₹{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>₹{item.price * item.quantity}</td>
                        <td>
                          <i
                            className="bi bi-plus-square text-success mx-2"
                            onClick={() => increaseQuantity(item.id)}
                            style={{ cursor: "pointer", fontSize: "1.2rem" }}
                          ></i>
                          <i
                            className="bi bi-trash3 text-danger"
                            onClick={() => removeFromCart(item.id)}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="cart-summary">
                  <p>Delivery: ₹50</p>
                  <h4 className="tord">
                    Order Total: ₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50}
                  </h4>
                </div>

                <div className="cart-buttons">
                  <button className="proceed-btn" onClick={onProceedToPay}>
                    Proceed to Buy
                  </button>
                  <button onClick={onCloseCart} className="close-btn1">
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutModalOpen && <CheckoutModal onClose={() => setIsCheckoutModalOpen(false)} />}
    </>
  );
};

export default CartModal;
