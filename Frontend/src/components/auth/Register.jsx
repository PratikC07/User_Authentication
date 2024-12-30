import React, { useState } from "react";
import "./auth.css";
import Input from "../ui/Input";
import { FaFolderPlus } from "react-icons/fa";
import Button from "../ui/Button";
import BackToLogin from "../ui/BackToLogin";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    console.log(name, email, password);
    navigate("/login");
  };

  return (
    <div className="auth_main">
      <form onSubmit={submithandler}>
        <div className="auth_container">
          <div className="auth_header">
            <FaFolderPlus />
            <p className="auth_heading">Welcome</p>
            <p className="auth_title">Create a new account</p>
          </div>
          <div className="auth_item">
            <label>Name *</label>
            <Input
              type="text"
              onChange={nameChange}
              required
              placeholder="enter your name"
            />
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
            <Button text="Register" />
          </div>
          <BackToLogin />
        </div>
      </form>
    </div>
  );
};

export default Register;
