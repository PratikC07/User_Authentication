import React, { useRef } from "react";
import { FaFingerprint } from "react-icons/fa";
import Input from "../ui/Input";
import Button from "../ui/Button";
import BackToLogin from "../ui/BackToLogin";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const otpRefs = useRef([]);

  const handleInputChange = (event, index) => {
    const value = event.target.value;

    if (value.length > 1) {
      event.target.value = value.slice(0, 1);
    }

    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (event, index) => {
    console.log(event.key);

    if (event.key === "Backspace" && !event.target.value && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };
  const submithandler = (event) => {
    event.preventDefault();
    const fetchOtp = otpRefs.current.map((ref) => ref.value).join("");
    console.log(`OTP number is ${fetchOtp}`);
    navigate('/password/update')
  };
  return (
    <div className="auth_main">
      <form onSubmit={submithandler}>
        <div className="auth_container">
          <div className="auth_header">
            <FaFingerprint />
            <p className="auth_heading">Verify your OTP</p>
            <p className="auth_title">
              Enter 6-digit OTP here we just sent at your email
            </p>
          </div>
          <div className="auth_item">
            <label>OTP *</label>
            <div className="otp_input_container">
              {[...Array(6)].map((item, index) => {
                return (
                  <Input
                    ref={(elem) => (otpRefs.current[index] = elem)}
                    onChange={(event) => handleInputChange(event, index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className="otp_input"
                    type="number"
                    key={index}
                    required
                  />
                );
              })}
            </div>
          </div>

          <div className="auth_action">
            <Button text="Verify" />
          </div>
          <div>
            <Timer />
          </div>
          <div>
            <BackToLogin />
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtp;
