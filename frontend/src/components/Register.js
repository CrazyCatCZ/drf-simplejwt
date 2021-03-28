import React, { useState } from "react";
import { axiosInstance } from "./axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = () => {
    axiosInstance
      .post("api/register/", {
        username: username,
        password1: password,
        password2: confirmPassword,
      })
      .catch((err) => {
        const res = err.response;

        if (res.status === 400) {
          const { username, password } = res.data;

          if (username !== undefined) {
            console.log("Username not filled!");
          }
          if (password !== undefined) {
            console.log("Password not fileld!");
          }
        } else if (res.status === 401) {
          console.log(res);
        }
      });
  };

  return (
    <div className="register-container">
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm Password"
      />
      <button onClick={registerUser} className="submit-button">
        Register
      </button>
    </div>
  );
};

export default Register;
