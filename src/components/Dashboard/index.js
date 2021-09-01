import React, {useState} from "react";
import "./Dashboard.css";
import { useHistory } from 'react-router-dom';
import fire from "../../fire";

function Dashboard() {
  const history = useHistory();

    const signOutUser = () => {
      fire.auth().signOut().then((user) => {
        // Sign-out successful.
        history.push('/Login');
        console.log(user);
      }).catch((error) => {
        console.log(error);
        // An error happened.
      });
      }

    return (
      <>
          {/* dashboard */}
          <div className="Account_dashboard">
            {/*  */}
            <div className="Dash_container">
              <div className="dash_box highline">
              <a href="/AccountProfiles"
              >Profile</a>
              </div>

              <div className="dash_box">
              <a href="/AccountOrders">Orders</a>
              </div>

              <div className="dash_box">
              <a href="/AccountOrder">Bookings</a>
              </div>

              <div className="dash_box">
              <a href="/AccountNotification">Notifications</a>
              </div>

              <div className="dash_box">
              <a href="/AccountOrder">Wishlist</a>
              </div>

            </div>
          
          {/* log out button */}
          <button onClick={signOutUser}>Log Out</button>
          </div>


          {/* mobile view */}
          <div className="mobile_Account_dashboard">
           <a href="/AccountProfiles"> <div className="mobile_dash_box">
             <img src="./Assets/profilepic.png" alt= ""/>
             <p>Profile</p>
            </div>
            </a>

            <a href="/AccountOrders">
            <div className="mobile_dash_box">
             <img src="./Assets/profilepic.png" alt= ""/>
             <p>Order</p>
            </div>
            </a>

            <a href="/AccountNotification">
            <div className="mobile_dash_box">
             <img src="./Assets/profilepic.png" alt= ""/>
             <p>Notification</p>
            </div>
            </a>

            <a href="/AccountProfiles">
            <div className="mobile_dash_box">
             <img src="./Assets/profilepic.png" alt= ""/>
             <p>Booking</p>
            </div>
            </a>

            <a href="/AccountProfiles">
            <div className="mobile_dash_box">
             <img src="./Assets/profilepic.png" alt= ""/>
             <p>contact Us</p>
            </div>
            </a>

          </div>

     </>
    );

}

export default Dashboard;
