import React from "react";
import "./TourBook.css";
import { useHistory } from "react-router-dom";

function TourBook() {
  const history = useHistory();

    return (
        <>
        {/* TourBook Section*/}
        <div className="tourbook">
        <div className="tour_darshanimg first"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/laxmi_pooja.png"
            })`,
          }}>
            <div className="black_box">
           <p> Laxmi Pooja</p>
            </div>
          </div>
 
       
        {/*tour details container  */}
        <div className="tour_details_container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
             fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.</p>

          {/* booking */}
          <div className="book_by_time">
            {/* select time */}
            <div className="time_selection">
              <select>
                <option value="" disabled selected>
                  Select time
                </option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="US">US</option>
              </select>
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
                onClick={() => history.push("/Pooja4")}
              >
                BOOK
              </button>
          </div>

          </div>

          </div>
         
        </div>


        {/* mobile view of TourBook */}

        </>
    );
}

export default TourBook;
