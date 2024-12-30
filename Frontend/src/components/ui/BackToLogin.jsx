import React from "react";
import "./backToLogin.css";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackToLogin = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleBackToLogin = () => {
    navigate("/login"); // Navigate to /login
  };
  return (
    <div className="back_toLogin_ui" onClick={handleBackToLogin}>
      <IoMdArrowBack /> <span>BackToLogin</span>
    </div>
  );
};

export default BackToLogin;
