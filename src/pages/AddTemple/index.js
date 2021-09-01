import React from "react";
import "./AddTemple.css";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";

function AddTemple() {
  const history = useHistory();

    return (
        <>

        {/* Navbar */}
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
        <div className="add_temple_form_wrapper tourform_wrapper">
        {/* TourBook Section*/}
        <div className="tourbooking_form_section">
        
        <div>
        <div className="addtemple_img live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature1.png"
            })`,
          }}>
            {/* black box */}
              <div className="img_black_box">Add Photos</div>
        </div>
         
         {/* second location */}
            <img src="./Assets/temple_loc.png" alt="" />
          </div>

         {/* temple location */}

         {/* form part*/}
         <div className="form_wrapper">

             <form>
                 {/* firstname */}
              <div className="Templename">
              <label htmlFor="firstName">Name of Temple</label>
              <input
                placeholder=""
                type="text"
                name="firstname"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
             
             {/* lastname */}
             <div className="Dietyname">
              <label htmlFor="firstName">Name of Diety</label>
              <input
                placeholder=""
                type="text"
                name="lastname"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
            
              {/*  */}
              <div className="AdminPhone">
              <label htmlFor="firstName">Temple Administration Phone</label>
              <input
                placeholder=""
                type="text"
                name="lastname"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
           
            {/* email id */}
            <div className="bemail">
              <label htmlFor="email">Temple Email Address</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* temple location */}
            <div className="bemail">
              <label htmlFor="email">Temple Location*</label>
              <input
                placeholder=""
                type="email"
                name="email"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
            
            {/* About Temple */}
            <div className="about_temple">
              <label htmlFor="tourDescription">About Temple</label>
              <textarea name="description" rows="9" cols="70"></textarea>
            </div>

            {/* message */}
            <span>
            Follow terms and condition while adding temple details.
            </span>
            </form>

        </div>
       
       </div>

          {/* bottom part of Section */}
    <div className= "bottomSec_Form"
         style={{display: "flex",
                padding: "10px",
                alignItems: "center",
                textAlign: "left"}}>
        {/* textarea */}
       <div className="special_request">
              <label htmlFor="tourDescription">Special Request</label>
              <textarea name="description" rows="5" cols="50"></textarea>
       </div>
      
          {/* book button */}
          <div className="booking_tour_btn">
          <button
                type="submit"
                onClick={() => history.push("/")}
              >
                Add Temple
              </button>
          </div>

       </div>


        </div>
         

        <div className="mobile_add_temple_form_wrapper">
        {/* img */}
        <div className="addtemple_img live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature1.png"
            })`,
          }}>
            {/* black box */}
              <div className="img_black_box">Add Photos</div>
        </div>

        {/*  */}
        <div className="Templename">
              <label htmlFor="firstName">Name of Temple</label>
              <input
                placeholder=""
                type="text"
                name="firstname"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
             
             {/* lastname */}
             <div className="Dietyname">
              <label htmlFor="firstName">Name of Diety</label>
              <input
                placeholder=""
                type="text"
                name="lastname"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
            
              {/*  */}
              <div className="AdminPhone">
              <label htmlFor="firstName">Temple Administration Phone</label>
              <input
                placeholder=""
                type="text"
                name="lastname"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
           
            {/* email id */}
            <div className="bemail">
              <label htmlFor="email">Temple Email Address</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* temple location */}
            <div className="bemail">
              <label htmlFor="email">Temple Location*</label>
              <input
                placeholder=""
                type="email"
                name="email"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
            
            {/* About Temple */}
            <div className="about_temple">
              <label htmlFor="tourDescription">About Temple</label>
              <textarea name="description" rows="9" cols="70"></textarea>
            </div>

            {/* message */}
            <span>
            Follow terms and condition while adding temple details.
            </span>

            <div className="special_request">
              <label htmlFor="tourDescription">Special Request</label>
              <textarea name="description" rows="5" cols="50"></textarea>
       </div>
      
          {/* book button */}
          <div className="booking_tour_btn">
          <button
                type="submit"
                onClick={() => history.push("/")}
              >
                Add Temple
              </button>
          </div>

        </div>  
        </div>
        </>
    );
}

export default AddTemple;
