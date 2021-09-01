import React from "react";
import "./Contact.css";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Contact() {
  const history = useHistory();

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* Banner */}
      <div
        className="Account_Banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/logsign.png"
          })`,
        }}
      >

        {/* Connect us section */}
        <div className="ContactConnection">
            {/* connect us container */}
            <div>
                <h2>Connect with us</h2>
                <div className="connect_us_box">
                  {/* email */}
                   <a href="/">
                     <p><strong>Email: </strong>support@mandir.in</p>
                   </a>
                  {/* Address */}
                  <p><strong>Address: </strong>Gurugram, Haryana</p>
                </div>
            </div>

            {/* Social Media container */}
            <div>
                <h2>Social Media</h2>
                <div className="connect_social_media">
                   <img src="./Assets/insta_white.png" alt="" />
                   <img src="./Assets/fb_white.png" alt="" />
                   <img src="./Assets/twitter_white.png" alt="" />
                </div>
            </div>

        </div>

        {/* customer query */}
        <div className="contact_queries">
        <div className="query_form_wrapper">
                  <form>
                    {/* firstname */}
                    <div className="fullname">
                      <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        Validate
                        required
                        // onChange={this.handleChange}
                      />
                    </div>

                    {/* lastname */}
                    <div className="email">
                      <input
                        placeholder="email"
                        type="email"
                        name="email"
                        validate="true"
                        // onChange={this.handleChange}
                      />
                    </div>

                    {/* phone number */}
                    <div className="email">
                      <input
                        placeholder="Phone Number"
                        type="email"
                        name="email"
                        noValidate
                        // onChange={this.handleChange}
                      />
                    </div>

                    {/* message */}
                    <div className="Message">
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows="8"
                        cols="53"
                      ></textarea>
                    </div>

                    {/* button */}
                    <button
                        className="submit_query"
                        type="submit"
                        onClick={() => history.push("/")}
                      >
                        Submit
                      </button>

                 </form>
                </div>
 
        </div>
      </div>
      
   </>
  );
}

export default Contact;
