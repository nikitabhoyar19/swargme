import React from "react";
import "./TourBookingForm.css";
import { useHistory } from "react-router-dom";


function TourBookingForm() {
  const history = useHistory();

    return (
        <>
        <div className="tourform_wrapper">
        {/* TourBook Section*/}
        <div className="tourbooking_form_section">
        
        <div className="tour_darshanimg first"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/rect195.png"
            })`,
          }}>
            <div className="black_box">
           <p> Kashi Vishvanath</p>
            </div>
          </div>

         {/* form part*/}
         <div className="form_wrapper main_form_wrapper">

             <form>
                 {/* firstname */}
             <div className="firstname">
              <label htmlFor="firstName">firstname</label>
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
              <label htmlFor="firstName">lastname</label>
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
              <label htmlFor="firstName">Phone Number</label>
              <input
                placeholder="Phone Number"
                type="text"
                name="Phone Number"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
            
            {/* email id */}
            <div className="bemail">
              <label htmlFor="email">Email Address</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* time slot */}
            <div className="time_slot">
              <label htmlFor="email">Time Slot</label>
              <input
                placeholder=""
                type="number"
                name="email"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

           {/* Coupon code sec */}
            <div className="code_section">

            <div className="code">
              <label htmlFor="email">Email Code</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* apply button */}
            <button
            className="code_apply"
            type="submit"
            onClick={() => history.push("/CompanyAccount")}
          >
            Apply
          </button>


            </div>

            {/* message */}
            <span>
            Details of the booking along with agent
            details will be sent to you via sms, email,
            whatsapp.
            </span>

            </form>

        </div>
       
       </div>
          
        <div className= "bottomSec_Form">
        {/* textarea */}
       <div className="special_request">
              <label htmlFor="tourDescription">Special Request</label>
              <textarea name="description" rows="5" cols="40"></textarea>
       </div>
      
       {/* price */}
        <div className="booking_price_actual">
              <h2>₹3,500.00<br/>
                <span> *inclusive all tax</span>
              </h2>
        </div>

          {/* book button */}
          <div className="booking_tour_btn">
          <button
                type="submit"
                onClick={() => history.push("/tour")}
              >
                PAY
              </button>
          </div>

       </div>

        </div>
        

        {/* mobile view of Tourform */}

        </>
    );
}

export default TourBookingForm;
