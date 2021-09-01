import React, { useState } from "react";
import "./Phone.css";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fire from "../../fire";

const Phone = () => {
  const history = useHistory();

  const [phone, setPhone] = useState();
  const [OTP, setOTP] = useState();
  const [step, setStep] = useState("1");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  fire.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      // User is signed in.
      history.push("/AccountProfiles");
    } else {
      // No user is signed in.
      console.log("user not login");
    }
  });

  const renderEnterNumberform = () => (
    <>
      <div className="phone_section">
      <input
        className="form-control"
        type="text"
        placeholder="enter Phonenumber"
        onChange={handlePhoneChange}
      />
      <br />

      <button type="submit">
        <strong>Login</strong>
      </button>
      <br />
      <hr />
      <div id="recaptcha" />
      </div>
    </>
  );

  const renderConfirmOtp = () => (
    <>
    <div className="Phone_sec">
      <input
        className="form-control"
        type="text"
        placeholder="Enter OTP"
        onChange={handleOTPChange}
      />

      <button type="submit">
        <strong>confirm</strong>
      </button>
    </div>

      <button type="button" 
      className="otp_back" onClick={handleBack}>
        <i className="bx bxs-chevrons-left"></i>
        <span>Back</span>
      </button>
    </>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === "1") {
      const reCaptcha = new fire.auth.RecaptchaVerifier("recaptcha");
      const result = await fire.auth().signInWithPhoneNumber(phone, reCaptcha);
      setConfirmationResult(result);
      setStep("2");
    } else {
      confirmationResult.confirm(OTP).then((user) => {
        if (user) {
          console.log(user);
        } else {
          console.log("user not login");
        }
      });
    }
  };

  const renderSignInForm = () => (
    <>
      <form onSubmit={handleSubmit}>
        {step === "1" ? renderEnterNumberform() : null}
        {step === "2" ? renderConfirmOtp() : null}
      </form>
    </>
  );

  const handleBack = async (e) => {
    e.preventDefault();
    if (step === "2") {
      setStep("1");
    }
  };

  return (
    <>
    {/* navbar */}
    <Navbar />

    {/* middle section */}
      <div
        className="login_sign_banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/logsign.png"
          })`,
        }}
      >
        <div className="login_sign_background">
          {/* login sign sec */}
          <div className="sign_section">
              <h2>Hello, Welcome!</h2>

              <div className="phone_container">
                {renderSignInForm()}
                </div>
          </div>

          {/* image section */}
          <div className="image_section">
            <div>
              <div className="image_gallery">
                <div className="gallery_item item_1">
                  <img src="./Assets/Frame73.png" className="" alt="" />
                </div>

                <div className="gallery_item item_2">
                  <img src="./Assets/Frame74.png" className="" alt="" />
                </div>

                <div className="gallery_item item_3">
                  <img src="./Assets/Frame75.png" className="" alt="" />
                </div>

                {/* Bact to first Signup */}
              </div>
              <p>
                Don’t have an account? <a href="/SignIn"> Sign Up</a> now
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Phone;
