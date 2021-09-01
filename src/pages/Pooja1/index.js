import React from "react";
import "./Pooja1.css";
import Navbar from "../../components/Navbar";
import SearchDestination from "../../components/SearchDestination";
import Amenities from "../../components/Amenities";
import Footer from "../../components/Footer";

function Pooja1() {
    return ( 
      <>
       {/* Navbar */}
       <Navbar />

       {/* background for the loginsign page banner */}
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
           
          <SearchDestination />

          {/* login sign sec */}
                     
          {/* image section */}
          <div className="tour_darshan_section">

          <div className="darshan_title">
          <h2>Featured Darshan Tours</h2>
          <a href="/"><span>view all<i class='bx bxs-chevron-right' ></i>
            </span>
            </a>
          </div>

         {/* tour darshan images sec */}
          <div className="tour_darshan_img_container">
            {/* first image */}
          <div className="tour_darshanimg first"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/ganesh_pooja.png"
            })`,
          }}>
            <div className="black_box">
           <p><a href="/Pooja3"> Kashi Vishvanath</a></p>
            </div>
          </div>
            
            {/* second image */}
            <div className="tour_darshanimg first"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/laxmi_pooja.png"
            })`,
          }}>
            <div className="black_box">
            <p><a href="/Pooja3"> Kashi Vishvanath</a></p>
            </div>
          </div>

          {/* third image */}
          <div className="tour_darshanimg second"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/house_pooja.png"
            })`,
          }}>
            <div className="black_box">
            <p><a href="/Pooja3"> Kashi Vishvanath</a></p>
            </div>
          </div>

          {/* fourth image */}
          <div className="tour_darshanimg second"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/car_pooja.png"
            })`,
          }}>
            <div className="black_box">
            <p><a href="/Pooja3"> Kashi Vishvanath</a></p>
            </div>
          </div>
          
        {/* fifth image */}
        <div className="tour_darshanimg second"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/rect198.png"
            })`,
          }}>
            <div className="black_box">
            <p><a href="/Pooja3"> Kashi Vishvanath</a></p>
            </div>
          </div>


          </div>

          </div>
         
          </div>

        </div>
     

       {/* Amenties Section */}
        <Amenities />

        {/* Footer */}
        <Footer />
     
      </>           
    ); 
}

export default Pooja1;
