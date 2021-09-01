import React from "react";
import "./AccountProfiles.css";
import { useHistory } from "react-router-dom";
import AccountNavbar from "../../components/AccountNavbar";
import Dashboard from "../../components/Dashboard";
import fire from "../../fire";

function AccountProfiles(props) {
  const history = useHistory();
   //sign out function

  return (
    <>
      {/* navbar */}
      <AccountNavbar />

      {/* banner */}
      <div
        className="Account_Banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/logsign.png"
          })`,
        }}
      >
        {/* dashboard */}
        <Dashboard />

        {/* acnt main section */}
        <div className="Account_acnt_section">
          {/*  */}
          <div className="Account_content_section">
            <p>Profile</p>
            {/* banner */}
            <div className="acnt_profile_section">
              {/* account profile picture */}
              <div className="acnt_avatar">
                <img src="./Assets/profilepic.png" alt="" />
              </div>

              {/* account form */}
              <div className="avatar_details">
                <div className="avatar_form_wrapper">
                  <form>
                    {/* firstname */}
                    <div className="firstname">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        placeholder="firstname"
                        type="text"
                        name="firstname"
                        noValidate
                        // onChange={this.handleChange}
                      />
                    </div>

                    {/* lastname */}
                    <div className="lastname">
                      <label htmlFor="firstName">Last Name *</label>
                      <input
                        placeholder="lastname"
                        type="text"
                        name="lastname"
                        noValidate
                        // onChange={this.handleChange}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="phone_number">
                      <label htmlFor="firstName">Phone Number *</label>
                      <div className="phone_verified">
                        <input
                          placeholder="Phone Number"
                          type="text"
                          name="Phone Number"
                          noValidate
                          // onChange={this.handleChange}
                        />

                        {/* phone verified button */}

                        <button>Verified</button>
                      </div>
                    </div>

                    {/* email id */}
                    <div className="b_email">
                      <label htmlFor="email">Email Address *</label>

                      <div className="email_verify">
                        <input
                          placeholder="Email"
                          type="email"
                          name="email"
                          noValidate
                          // onChange={this.handleChange}
                        />

                        <button>Verify</button>
                      </div>
                    </div>

                    {/* address */}
                    <div className="address">
                      <label htmlFor="address">Address *</label>
                      <textarea
                        name="description"
                        rows="5"
                        cols="50"
                      ></textarea>
                      {/* button for address */}
                      <button>+ Add Address</button>
                    </div>

                    {/* ****buttons section**** */}
                    <div className="Profile_button_container">
                      {/* button for cancel */}
                      <button
                        className="cancel_profile"
                        type="submit"
                        onClick={() => history.push("/")}
                      >
                        Cancel
                      </button>

                      {/* button for save */}
                      <button
                        className="save_profile"
                        type="submit"
                        onClick={() => history.push("/")}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountProfiles;
