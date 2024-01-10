import React from 'react'
import "./forgotPassword.css"
import { IoArrowBack } from "react-icons/io5";

const ForgotPassword = () => {
  return (
    <>
      <div className="box_forgot">
        {/* <Link to="/loginuser" className="box_iconBack">
            <IoArrowBack id="box_icon_Back" />
            <p>Back</p>
        </Link> */}
        <h2>Forgot password</h2>
        <div className="title">Please verify your email and change your password!</div>
        <form className='container_form'>
          <input type="text" placeholder="Email" required />
          <input type="text" placeholder="Verification number" required />
          <input type="email" placeholder="New passwords" required />
          <input type="password" placeholder="Confirm your new password" required />
          <button type="submit">Confirmation</button>
        </form>
      </div>
    </>
  )
}

export default ForgotPassword