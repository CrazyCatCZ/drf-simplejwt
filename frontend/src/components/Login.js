import React, { useState } from "react";
import axios from "axios";
import { axiosInstance } from "./axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [statusCode, setStatusCode] = useState(0);

  const loginUser = () => {
    axiosInstance
      .post("api/token-obtain/", {
        username: username,
        password: password,
      })
      .catch((err) => {
        const res = err.response;

        if (res.status === 400) {
          setStatusCode(res.status);
          const { username, password } = res.data;
          if (username !== undefined) {
            console.log("Username not filled!");
          }
          if (password !== undefined) {
            console.log("Password not fileld!");
          }
        } else if (res.status === 401) {
          console.log("Wrong credentials");
        }
      })
      .then((res) => {
        if (res) {
          const { access, refresh } = res.data;

          console.log(access, refresh);

          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + localStorage.getItem("access_token");
          //history.push('/');
        }
      });
  };

  return (
    <div className="login-container">
      <div>
        <span className="message-container" />
      </div>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={loginUser} className="submit-button">
        Login
      </button>
    </div>
  );
};

export default Login;
