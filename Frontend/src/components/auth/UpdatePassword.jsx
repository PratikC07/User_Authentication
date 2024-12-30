import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import BackToLogin from "../ui/BackToLogin";
import { RxUpdate } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    console.log(password, confirmPassword);
    navigate("/login");
  };

  return (
    <div className="auth_main">
      <form onSubmit={submithandler}>
        <div className="auth_container">
          <div className="auth_header">
            <RxUpdate />
            <p className="auth_heading">New Password</p>
            <p className="auth_title">enter at least 6-digit long password</p>
          </div>
          <div className="auth_item">
            <label>Password *</label>
            <Input
              type="password"
              onChange={passwordChange}
              required
              placeholder="new password"
            />
          </div>
          <div className="auth_item">
            <label>Confirm password *</label>
            <Input
              type="password"
              onChange={confirmPasswordChange}
              required
              placeholder="confirm password"
            />
          </div>
          <div className="auth_action">
            <Button text="Update Password" />
          </div>
          <div>
            <BackToLogin />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
