import React, { Component } from 'react'
import "./LiveDarshan1.css";
import Navbar from "../../components/Navbar";
import SearchPooja from "../../components/SearchPooja";
import Footer from "../../components/Footer";

export default class index extends Component {

    render() {
        return (
        <>
        {/* navbar */}
        <Navbar />

        {/* Middle section of live page */}
        <div className="LiveBackground"
        style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/logsign.png"
            })`,
          }}>
        
        <SearchPooja />

{/* featured live section */}
        <div className= "featuredLive_Pooja">
        {/* heading */}
          <div className="darshan_title">
          <h2>Featured Live Arti/ Puja</h2>
          <a href="/LiveDarshan2"><span>view all<i class='bx bxs-chevron-right' ></i>
            </span>
            </a>
          </div>

        {/* section for cards */}
        <div className="featuredlive_Image_sec">

           {/* first image */}
           <div className="live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature1.png"
            })`,
          }}>
            {/* black box */}
            <div className="img_black_box">Badrinath</div>
            </div>
       
           {/* second image */}
           <div className="live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature1.png"
            })`,
          }}>
            {/* black box */}
            <div className="img_black_box">Badrinath</div>
            </div>

           {/* third image */}
           <div className="live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature1.png"
            })`,
          }}>
            {/* black box */}
            <div className="img_black_box">Badrinath</div>
            </div>

            {/* fouth image */}
            <div className="live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature1.png"
            })`,
          }}>
            {/* black box */}
            <div className="img_black_box">Badrinath</div>
            </div>
 
         </div>
        </div>

{/* featured live darshan section */}
<div className= "featuredLive_Darshan">
        {/* heading */}
          <div className="darshan_title">
          <h2>Featured Online Darshans</h2>
          <a href="/LiveDarshan3"><span>view all<i class='bx bxs-chevron-right' ></i>
            </span>
            </a>
          </div>

        {/* section for cards */}
        <div className="featuredlive_Image_sec">

           {/* first image */}
           <div className="live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature2.png"
            })`,
          }}>
            {/* black box */}
            <div className="img_black_box">Vishnu Pooja</div>
            </div>
       
           {/* second image */}
           <div className="live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature1.png"
            })`,
          }}>
            {/* black box */}
            <div className="img_black_box">Vishnu Pooja</div>
            </div>

           {/* third image */}
           <div className="live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature3.png"
            })`,
          }}>
            {/* black box */}
            <div className="img_black_box">Durga Pooja</div>
            </div>

            {/* fouth image */}
            <div className="live_img"
           style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/feature4.png"
            })`,
          }}>
            {/* black box */}
            <div className="img_black_box">Durga Pooja</div>
            </div>
 
         </div>
        </div>


        </div>
        {/* footer */}
        <Footer />
        </>
        )
    }
}
