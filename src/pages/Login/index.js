import React, {useState} from "react";
import "./Login.css";
import { useHistory } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fire from '../../fire';

function Login() {
  const[email, setEmail]= useState(null);
  const[password, setPassword]= useState(null);
  const history = useHistory();

  const handleChangeEmail =(e) => {
    setEmail(e.target.value);
}

const handleChangePassword =(e) => {
  setPassword(e.target.value);
}

fire.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    history.push('/AccountProfiles');
  } else {
    // No user is signed in.
    console.log('user not login');
  }
});

  
    const loginwithEmail = (e) => {
      e.preventDefault();
      
      fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
          //this.props.history.push('/AccountProfiles')
          history.push("/AccountProfiles");
          console.log('Successfully Logged In');
        })
        .catch((err) => {
          alert('Please SignIn with correct id and password!');
          console.log('error');
          console.log('Error: ' + err);
        })
    }

    var gprovider = new fire.auth.GoogleAuthProvider();

    const signUpWithGoogle = () => {
      fire.auth().signInWithPopup(gprovider)
        .then((u) => {
          this.props.history.push('/AccountProfiles')
          console.log('Successfully logged In');
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
            <h2>Hello, Welcome Back!</h2>

            {/* email */}
            <div className="email">
              <input
              id="useEmail"
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
                id="usePassword"
                placeholder="Password"
                type="password"
                name="password"
                required
                onChange={handleChangePassword}
              />
            </div>

            <a href="./ForgotPassword"><label>Forgot password?</label></a>

            {/* submit button */}
            <div className="signcreateAccount">
              <button type="submit"
                      onClick={loginwithEmail}>
                      Login</button>

              <label>Or Login with</label>

            </div>

            <div className="SignInWithSocial">
              <div>
              <img src="./Assets/logos_facebook.png" alt="" />
              <img onClick={signUpWithGoogle}
              src="./Assets/logo_google.png" alt="" />
              <img src="./Assets/logos_twitter.png" alt="" />
              </div>
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

        {/* Bact to first Signup */}

          </div>
          <p>Don’t have an account? <a href="/SignIn"> Sign Up</a> now</p>
          </div>

           

          </div>
          </div>

        </div>
     
        {/* Footer */}
        <Footer />
     
      </>           
    ); 
}

export default Login;

  