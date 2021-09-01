import React from "react";
import "./Pooja4.css";
import Navbar from "../../components/Navbar";
import Amenities from "../../components/Amenities";
import TourBookingForm from "../../components/TourBookingForm";
import Footer from "../../components/Footer";

function Pooja4() {
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
        <TourBookingForm />

        </div>
 

        {/* Amenities */}
        <Amenities />

        {/* Footer */}
        <Footer />
        </>
    );
}

export default Pooja4;
