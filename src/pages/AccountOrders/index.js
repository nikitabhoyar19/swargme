import React from "react";
import "./AccountOrders.css";
import { useHistory } from "react-router-dom";
import AccountNavbar from "../../components/AccountNavbar";
import Dashboard from "../../components/Dashboard";

function AccountOrders(props) {
  const history = useHistory();

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
            <div className="account_order_section">
              <div className="acnt_order_divide">
                {/* Upcomin order */}
                <a href="/Account">Upcoming Order</a>

                {/* Past Order */}
                <a href="/Account">Past Order</a>
              </div>

              <hr />

              {/* order main section */}
              <div className="order_card_sec">
                {/* image */}
                <img src="./Assets/order_pic.png" alt="" />

                {/* order description */}
                <div className="order_description_section">
                  <h2>Ganeshji Earthen Idol 20cm x 15 cm x 30cm</h2>
                  <small>Order Placed: 5 JAN 2021</small>
                  <small>Expected Delivey: 9 JAN 2021</small>
                  <small>Total Amoount: INR 2500</small>

                  {/* buttons container */}
                  <div className="order_buttons">
                    {/* invoice */}
                    <button
                      className="invoice_order"
                      type="submit"
                      onClick={() => history.push("/")}
                    >
                      View Invoice
                    </button>

                    {/* cancel */}
                    <button
                      className="cancel_order"
                      type="submit"
                      onClick={() => history.push("/")}
                    >
                      Cancel Order
                    </button>

                    {/* view detail */}
                    <button
                      className="view_order"
                      type="submit"
                      onClick={() => history.push("/")}
                    >
                      Vew Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="order_card_sec">
                {/* image */}
                <img src="./Assets/order_pic.png" alt="" />

                {/* order description */}
                <div className="order_description_section">
                  <h2>Ganeshji Earthen Idol 20cm x 15 cm x 30cm</h2>
                  <small>Order Placed: 5 JAN 2021</small>
                  <small>Expected Delivey: 9 JAN 2021</small>
                  <small>Total Amoount: INR 2500</small>

                  {/* buttons container */}
                  <div className="order_buttons">
                    {/* invoice */}
                    <button
                      className="invoice_order"
                      type="submit"
                      onClick={() => history.push("/")}
                    >
                      View Invoice
                    </button>

                    {/* cancel */}
                    <button
                      className="cancel_order"
                      type="submit"
                      onClick={() => history.push("/")}
                    >
                      Cancel Order
                    </button>

                    {/* view detail */}
                    <button
                      className="view_order"
                      type="submit"
                      onClick={() => history.push("/")}
                    >
                      Vew Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="order_card_sec">
                {/* image */}
                <img src="./Assets/order_pic.png" alt="" />

                {/* order description */}
                <div className="order_description_section">
                  <h2>Ganeshji Earthen Idol 20cm x 15 cm x 30cm</h2>
                  <small>Order Placed: 5 JAN 2021</small>
                  <small>Expected Delivey: 9 JAN 2021</small>
                  <small>Total Amoount: INR 2500</small>

                  {/* buttons container */}
                  <div className="order_buttons">
                    {/* invoice */}
                    <button
                      className="invoice_order"
                      type="submit"
                      onClick={() => history.push("/")}
                    >
                      View Invoice
                    </button>

                    {/* cancel */}
                    <button
                      className="cancel_order"
                      type="submit"
                      onClick={() => history.push("/")}
                    >
                      Cancel Order
                    </button>

                    {/* view detail */}
                    <button
                      className="view_order"
                      type="submit"
                      onClick={() => history.push("/")}
                    >
                      Vew Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default AccountOrders;
