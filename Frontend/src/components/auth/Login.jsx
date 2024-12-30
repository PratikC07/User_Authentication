import React, { useState } from "react";
import "./auth.css";
import Input from "../ui/Input";
import { FaFolderPlus } from "react-icons/fa";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="auth_main">
      <form onSubmit={submithandler}>
        <div className="auth_container">
          <div className="auth_header">
            <IoIosLogIn />
            <p className="auth_heading">Welcome Back</p>
            <p className="auth_title">login to continue</p>
          </div>
          <div className="auth_item">
            <label>Email *</label>
            <Input
              type="email"
              onChange={emailChange}
              required
              placeholder="enter your email"
            />
          </div>
          <div className="auth_item">
            <label>Password *</label>
            <Input
              type="password"
              onChange={passwordChange}
              required
              placeholder="enter your password"
            />
          </div>
          <div className="auth_action">
            <Button text="Login" />
          </div>
          <div className="auth_options">
            <Link to="/register">Create new account?</Link>
            <Link to="/forget/password">Forget password</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
