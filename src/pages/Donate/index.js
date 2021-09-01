import React from "react";
import "./Donate.css";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Donate() {
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
          <div className="donation_section">
          {/* donation criteria and position of people */}
          <div className="donation_criteria">
              {/*  */}
          <div className="donation_pictures_them">
              <div>
              <img src="./Assets/people1.png" alt="" />
              <img src="./Assets/people1.png" alt="" />
              </div>
              <p>You can save them from hunger</p>
           </div>
           {/*  */}
           <div className="donation_quantiity_people">

            <div className="polygon1">
            <img src="./Assets/polygon4.png" alt="" />
            <p>₹ 50000+ <br />
            raised</p>
            </div>

            <div className="polygon2">
            <img src="./Assets/polygon3.png" alt="" />
            <p>₹ 50000+ <br />
            raised</p>
            </div>

            <div className="polygon3">
            <img src="./Assets/polygon2.png" alt="" />
            <p>₹ 50000+<br />raised</p>
            </div>

           </div>
          </div>



          {/* important message */}
          <h2>Your SMALL help can bring BIG
              <br /> chnages</h2>
         


          {/* donation payment container */}
          <div className="donation_payments_help">
              {/*  */}
              <div className="amount_payment_container">
                  {/* button */}
                  <div className="donate_amnt_btn">
                  <button type="submit" 
                  onClick={() => history.push("/")}>
                Donate
              </button>
              </div>

                   {/* enter amount */}
                <div className="enter_amnt_donation">
                 <input type="text" placeholder="Enter Amount" name="amount" />
                </div>

                   {/* payment div */}
                   <small>Pay Via</small>
                   <div className= "donation_pay_options">
                       <img src="./Assets/pay1.png" alt="" />
                       <img src="./Assets/logos_paypal.png" alt="" />
                       <img src="./Assets/credcar.png" alt="" />
                    </div>
              </div>


              {/*  */}
              <div className="donation_pictures_them">
              <div>
              <img src="./Assets/people3.png" alt="" />
              <img src="./Assets/people4.png" alt="" />
              </div>
              <p>You can help them go to school</p>
            </div>

          </div>
          </div>
        </div>

       </>
    );
}

export default Donate;
