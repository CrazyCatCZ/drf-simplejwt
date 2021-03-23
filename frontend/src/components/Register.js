import React from "react";

const Register = () => {
  return (
    <div className="register-container">
      <input placeholder="Username" />
      <input placeholder="Password" />
      <input placeholder="Confirm Password" />
      <button className="submit-button">Register</button>
    </div>
  );
};

export default Register;
