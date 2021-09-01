import React from "react";
import "./ForgotPassword.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";

function ForgotPassword() {
  const history = useHistory();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* background for the loginsign page banner */}
      <div
        className="login_sign_banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/logsign.png"
          })`,
        }}
      >
        {/* container for signin and pictures  */}
        <div className="login_sign_background_forgot">
          <p>Forgot your password ?</p>

          <div className="forgot_details_section">
            {/* email */}
            <div className="email">
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
                // onChange={this.handleChange}
              />
            </div>

            <div>
              <p>OR</p>
            </div>

            {/* Password */}
            <div className="password">
              <input
                placeholder="Password"
                type="password"
                name="password"
                required
                // onChange={this.handleChange}
              />
            </div>
          </div>

          {/* button */}
          <div className="forgotAccount_btnsec">
            <button type="submit" onClick={() => history.push("/Login")}>
              Sign In
            </button>

            <label>Resend OTP</label>

            {/* enter otp */}
            <div className="enterOtp">
              <input
                placeholder="Enter OTP"
                type="password"
                name="password"
                required
                // onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default ForgotPassword;
