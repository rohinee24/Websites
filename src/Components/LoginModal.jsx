import React, { useState } from "react";
import '../Css/LoginModal.css';

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      onLoginSuccess(); // Allow any input
    } else {
      alert("Email and password are required!");
    }
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button className="close-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
