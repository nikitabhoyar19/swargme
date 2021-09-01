import React, { useState } from "react";
import "./Phone.css";
import { useHistory } from "react-router-dom";
import fire from "../../fire";

function Phone() {
  const [phone, setPhone] = useState(null);
  const [OTP, setOTP] = useState();

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    onSubmitOTP.confirm(OTP).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      console.log(error);
      alert("Incorrect OTP");
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  const recaptchaVerifier = (e) => {
    window.recaptchaVerifier = new fire.auth.RecaptchaVerifier('sign_button', {
      'size': 'invisible',
      'callback': (response) => {
        const appVerifier = window.recaptchaVerifier;
        fire.auth().signInWithPhoneNumber(phone, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        }).catch((error) => {
          console.log(error);
          // Error; SMS not sent
          // ...
        });
   
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    });
    
  }

  const signInWithPhone = (e) => {
    e.preventDefault();
    recaptchaVerifier();
  }

  return (
    <>
      <input
        id="usePhone"
        placeholder="number"
        type="number"
        name="email"
        required
        onChange={handleChangePhone}
      />
      <button 
      id= "sign_button"
      type= "submit"
      onClick={signInWithPhone}>Send</button>

    <input
        id="useEmail"
        placeholder="otp"
        type="number"
        name="email"
        required
        onChange={handleOTPChange}
      />
      <button type="submit"
      onClick={onSubmitOTP}>Send</button>

    </>
  );
}

export default Phone;
