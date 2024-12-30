import React, { useState } from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import Input from "../ui/Input";
import Button from "../ui/Button";
import BackToLogin from "../ui/BackToLogin";
import { useNavigate } from 'react-router-dom';



const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    const submithandler = (event)=>{
        event.preventDefault();
        console.log(email);
        navigate('/otp/verify')
    }
  return (
    <div className="auth_main">
      <form onSubmit={submithandler}>
        <div className="auth_container">
          <div className="auth_header">
          <MdOutlineAttachEmail />
            <p className="auth_heading">Forget your password</p>
            <p className="auth_title">Enter your registered email we will send a 6-digit OTP</p>
          </div>
          <div className="auth_item">
            <label>Email *</label>
            <Input type='email' onChange={emailChange} required placeholder="enter your email" />
          </div>
          <div className="auth_action">
            <Button text="Send OTP" />
          </div>
          <BackToLogin/>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword
