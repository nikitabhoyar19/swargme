import React,{useState} from "react";
import "./SignIn.css";
import { useHistory } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fire from '../../fire';


function SignIn() {
  const[email, setEmail]= useState(null);
  const[password, setPassword]= useState(null);
  const history = useHistory();

  const handleChangeEmail =(e) => {
      setEmail(e.target.value);
  }

  const handleChangePassword =(e) => {
    setPassword(e.target.value);
}


  var gprovider = new fire.auth.GoogleAuthProvider();
  var fprovider = new fire.auth.FacebookAuthProvider();
  
  // signup function
  const signUp = (e) => {
    e.preventDefault();
    // const email = document.querySelector('#email').value;
    // const password = document.querySelector('#password').value;
    console.log(email, password);
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        emailVerification();
        history.push('/Login')
        console.log(u, ' Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  const emailVerification = (e) => {
  var user = fire.auth().currentUser;

    user.sendEmailVerification().then((u) => {
  // Email sent.
     }).catch((err) => {
  // An error happened.
      console.log('Error: ' + err.toString());
     })
  }

  const signUpWithGoogle = () => {
    fire.auth().signInWithPopup(gprovider)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  const signUpWithFb = () => {
    fire.auth().signInWithPopup(fprovider)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }



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
        <div className="login_sign_background">

          {/* login sign sec */}
           <div className="sign_section">
          <div className="form-wrapper signform-wrapper">
             <form >
            <h2>Welcome to Swargme</h2>

            {/* email */}
            <div className="email">
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
                onChange={handleChangeEmail}
              />
            </div>

            {/* Password */}
            <div className="password">
              <input
                placeholder="Password"
                type="password"
                name="password"
                required
                onChange={handleChangePassword}
              />
            </div>

            {/* confirm password */}
            <div className="password">
              <input
                placeholder="Confirm Password"
                type="password"
                name="password"
                required
                // onChange={this.handleChange}
              />
            </div>


            {/* submit button */}
            <div className="signcreateAccount">
              <button type="submit"
                   onClick={signUp}>
                   Sign In</button>

              <label>Or Sign Up with</label>

            </div>
{/*  sign in with fb, google and twitter */}
            <div className="SignInWithSocial">
              {/* Fb */}
              <img onClick={signUpWithFb}
               src="./Assets/logos_facebook.png" alt="" />
               {/* Google */}
              <img onClick={signUpWithGoogle}
              src="./Assets/logo_google.png" alt="" />
                {/* facebook */}
              <img src="./Assets/logos_twitter.png" alt="" />
            </div>

          </form>
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

          </div>
          <p>Find your peace with Swargme.<br />
           Everything at your fingertips.</p>
          </div>

          </div>
          </div>

        </div>
     
        {/* Footer */}
        <Footer />
     
      </>           
    ); 
}

export default SignIn;

  