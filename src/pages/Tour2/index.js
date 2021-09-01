import React from "react";
import "./Tour2.css";
import Navbar from "../../components/Navbar";
import SearchDestination from "../../components/SearchDestination";
import Amenities from "../../components/Amenities";
import TourBook from "../../components/TourBook";
import Footer from "../../components/Footer";

function Tour2() {
    return (
        <>
        {/* navbar */}
        <Navbar />

        {/* Tour banner */}
        <div
        className="tour_banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/logsign.png"
          })`,
        }}
      >
        {/* container for signin and pictures  */}
        <div className="tour_background">

          {/* login sign sec */}
          <SearchDestination />

          {/* image section */}
          <div className="tour_darshan_section">

          <div className="darshan_title">
          <h2>  </h2>
          <a href="/Tour"><span><i class='bx bx-arrow-back'></i>back
            </span>
            </a>
          </div>

         {/* tour darshan images sec */}
          
           {/* Tourbook */}
           <TourBook />
          

          </div>
         
          </div>

        </div>
 

        {/* Amenities */}
        <Amenities />

        {/* Footer */}
        <Footer />
        </>
    );
}

export default Tour2;
