// import React, { useState } from "react";
// import "../Css/CheckoutModal.css";

// const CheckoutModal = ({ onClose }) => {
//   const [pageFlag, setPageFlag] = useState("address"); // 'address' or 'payment'
//   const [address, setAddress] = useState({
//     country: "",
//     fullName: "",
//     mobile: "",
//     houseBuilding: "",
//     areaStreet: "",
//     landmark: "",
//     pincode: "",
//     state: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [paymentMethod, setPaymentMethod] = useState("");

//   const handleChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });

//     // Remove error message when user starts typing
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validateForm = () => {
//     let newErrors = {};

//     if (!address.country.trim()) newErrors.country = "Country/Region is required.";
//     if (!address.fullName.trim()) newErrors.fullName = "Full Name is required.";
//     if (!address.mobile.trim()) {
//       newErrors.mobile = "Mobile Number is required.";
//     } else if (!/^\d{10}$/.test(address.mobile)) {
//       newErrors.mobile = "Enter a valid 10-digit mobile number.";
//     }
//     if (!address.houseBuilding.trim()) newErrors.houseBuilding = "Flat, House, Building is required.";
//     if (!address.areaStreet.trim()) newErrors.areaStreet = "Area, Village, Street is required.";
//     if (!address.pincode.trim()) {
//       newErrors.pincode = "Pincode/City is required.";
//     } else if (!/^\d{6}$/.test(address.pincode)) {
//       newErrors.pincode = "Enter a valid 6-digit pincode.";
//     }
//     if (!address.state.trim()) newErrors.state = "State is required.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleAddressSubmit = () => {
//     if (validateForm()) {
//       setPageFlag("payment"); // Move to payment method selection
//     }
//   };

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handlePaymentSubmit = () => {
//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }
//     alert(`Payment Confirmed: ${paymentMethod}`);
//     onClose(); // Close the modal after confirming payment
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         {pageFlag === "address" ? (
//           <>
//             <h3>Shipping Address</h3>
//             <form>
//               <input type="text" name="country" placeholder="Country/Region" onChange={handleChange} />
//               {errors.country && <span className="error">{errors.country}</span>}

//               <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
//               {errors.fullName && <span className="error">{errors.fullName}</span>}

//               <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
//               {errors.mobile && <span className="error">{errors.mobile}</span>}

//               <input type="text" name="houseBuilding" placeholder="Flat, House, Building" onChange={handleChange} />
//               {errors.houseBuilding && <span className="error">{errors.houseBuilding}</span>}

//               <input type="text" name="areaStreet" placeholder="Area, Village, Street" onChange={handleChange} />
//               {errors.areaStreet && <span className="error">{errors.areaStreet}</span>}
//               <input type="text" name="pincode" placeholder="Pincode/City" onChange={handleChange} />
//               {errors.pincode && <span className="error">{errors.pincode}</span>}

//               <input type="text" name="state" placeholder="State" onChange={handleChange} />
//               {errors.state && <span className="error">{errors.state}</span>}

//               <button type="button" onClick={handleAddressSubmit} className="use-address-btn">
//                 Use This Address
//               </button>
//             </form>
//           </>
//         ) : (
//           <>
//             <h3>Select Payment Method</h3>
//             <label>
//               <input type="radio" name="payment" value="creditCard" onChange={handlePaymentChange} /> Credit/Debit Card
//             </label>
//             <label>
//               <input type="radio" name="payment" value="upi" onChange={handlePaymentChange} /> UPI
//             </label>
//             <label>
//               <input type="radio" name="payment" value="cod" onChange={handlePaymentChange} /> Cash on Delivery (COD)
//             </label>

//             <button className="confirm-btn" onClick={handlePaymentSubmit}>
//               Confirm Payment
//             </button>
//           </>
//         )}

//         <button onClick={onClose} className="close-btn">Close</button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutModal;
import React, { useState } from "react";
import "../Css/CheckoutModal.css";

const CheckoutModal = ({ onClose }) => {
  const [pageFlag, setPageFlag] = useState("address"); // 'address' or 'payment'
  const [address, setAddress] = useState({
    country: "",
    fullName: "",
    mobile: "",
    houseBuilding: "",
    areaStreet: "",
    landmark: "",
    pincode: "",
    state: "",
  });

  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
  });
  const [upiId, setUpiId] = useState("");

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });

    // Remove error message when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!address.country.trim()) newErrors.country = "Country/Region is required.";
    if (!address.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!address.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required.";
    } else if (!/^\d{10}$/.test(address.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }
    if (!address.houseBuilding.trim()) newErrors.houseBuilding = "Flat, House, Building is required.";
    if (!address.areaStreet.trim()) newErrors.areaStreet = "Area, Village, Street is required.";
    if (!address.pincode.trim()) {
      newErrors.pincode = "Pincode/City is required.";
    } else if (!/^\d{6}$/.test(address.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode.";
    }
    if (!address.state.trim()) newErrors.state = "State is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddressSubmit = () => {
    if (validateForm()) {
      setPageFlag("payment"); // Move to payment method selection
    }
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentSubmit = () => {
    if (paymentMethod === "creditCard" && (!cardDetails.cardNumber || !cardDetails.expiryDate)) {
      alert("Please fill in card details.");
      return;
    }

    if (paymentMethod === "upi" && !upiId.trim()) {
      alert("Please enter your UPI ID.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod === "cod") {
      alert("Cash on Delivery confirmed!");
      onClose(); // Close the modal after confirming payment
    } else {
      alert(`Payment Confirmed: ${paymentMethod}`);
      onClose(); // Close the modal after confirming payment
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {pageFlag === "address" ? (
          <>
            <h3>Shipping Address</h3>
            <form>
              <input type="text" name="country" placeholder="Country/Region" onChange={handleChange} />
              {errors.country && <span className="error">{errors.country}</span>}

              <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
              {errors.fullName && <span className="error">{errors.fullName}</span>}

              <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
              {errors.mobile && <span className="error">{errors.mobile}</span>}

              <input type="text" name="houseBuilding" placeholder="Flat, House, Building" onChange={handleChange} />
              {errors.houseBuilding && <span className="error">{errors.houseBuilding}</span>}

              <input type="text" name="areaStreet" placeholder="Area, Village, Street" onChange={handleChange} />
              {errors.areaStreet && <span className="error">{errors.areaStreet}</span>}
              
              <input type="text" name="pincode" placeholder="Pincode/City" onChange={handleChange} />
              {errors.pincode && <span className="error">{errors.pincode}</span>}

              <input type="text" name="state" placeholder="State" onChange={handleChange} />
              {errors.state && <span className="error">{errors.state}</span>}

              <button type="button" onClick={handleAddressSubmit} className="use-address-btn">
                Use This Address
              </button>
            </form>
          </>
        ) : (
          <>
            <h3>Select Payment Method</h3>
            <label>
              <input type="radio" name="payment" value="creditCard" onChange={handlePaymentChange} />
              Credit/Debit Card
            </label>
            {paymentMethod === "creditCard" && (
              <>
                <input 
                  type="text" 
                  name="cardNumber" 
                  placeholder="Card Number" 
                  onChange={handleCardDetailsChange} 
                />
                <input 
                  type="text" 
                  name="expiryDate" 
                  placeholder="Expiry Date (MM/YY)" 
                  onChange={handleCardDetailsChange} 
                />
              </>
            )}

            <label>
              <input type="radio" name="payment" value="upi" onChange={handlePaymentChange} />
              UPI
            </label>
            {paymentMethod === "upi" && (
              <>
                <input 
                  type="text" 
                  name="upiId" 
                  value={upiId} 
                  placeholder="Enter your UPI ID" 
                  onChange={handleUpiIdChange} 
                />
              </>
            )}

            <label>
              <input type="radio" name="payment" value="cod" onChange={handlePaymentChange} />
              Cash on Delivery (COD)
            </label>

            <button className="confirm-btn" onClick={handlePaymentSubmit}>
              Confirm Payment
            </button>
          </>
        )}

        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
