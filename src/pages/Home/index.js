import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.css";
import Sliderview from "../../components/Sliderview/Sliderview.js";
import Belief from "../../components/Belief";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* first slide banner */}
      <Sliderview />

      {/* Belief */}
      <Belief />

      {/* second cardbanner */}
      <div
        className="home_banner_second"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/Rectangle12.png"
          })`,
        }}
      >
        {/* inner cards container */}
        <div className="info_cardcontainer">
          {/* info card one */}
          <div className="first_card">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>
          {/*  */}
          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>
          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>
          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          <div className="info_card1">
            <div className="red_box">
              <img src="/Assets/Ellipse6.png" alt="" />
            </div>
            <h2>Meditation</h2>
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>

      {/* latest update banner */}
      <div
        className="latest_update_banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/Rectangle13.png"
          })`,
        }}
      >
        <h1>Latest Update</h1>
        {/* temple update cards */}
        <div className="temple_update_card">
          {/* card 1 */}
          <div className="update_card">
            {/* card img */}
            <div
              style={{
                margin: "170px auto auto 15px",
                color: "#FFFFFF",
                fontSize: "18px",
                position: "absolute",
                backgroundColor: "#412236",
                padding: "5px 15px",
              }}
            >
              Temple /
            </div>
            <img src="./Assets/updatecardimg1.png" alt="" />
            {/* card content */}
            <div style={{ padding: "0px 10px" }}>
              <h2>Title</h2>
              <p>
                lorem ipsum is imply dummy text of the prining and typesetting
                industry printing and typesetting industry.
              </p>
              <span>
                READ
                <br />
                More
              </span>
              {/* <div>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          </div> */}
            </div>
          </div>
          {/* card 2 */}
          <div className="update_card">
            {/* card img */}
            <div
              style={{
                margin: "170px auto auto 15px",
                color: "#FFFFFF",
                fontSize: "18px",
                position: "absolute",
                backgroundColor: "#412236",
                padding: "5px 15px",
              }}
            >
              Temple /
            </div>
            <img src="./Assets/updatecardimg2.png" alt="" />

            {/* card content */}
            <div style={{ padding: "0px 10px" }}>
              <h2>Title</h2>
              <p>
                lorem ipsum is imply dummy text of the prining and typesetting
                industry printing and typesetting industry.
              </p>
              <span>
                READ
                <br />
                More
              </span>
              {/* <div>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          </div> */}
            </div>
          </div>
          {/* card 3 */}
          <div className="update_card">
            {/* card img */}
            <div
              style={{
                margin: "170px auto auto 15px",
                color: "#FFFFFF",
                fontSize: "18px",
                position: "absolute",
                backgroundColor: "#412236",
                padding: "5px 15px",
              }}
            >
              Temple /
            </div>
            <img src="./Assets/updatecardimg3.png" alt="" />
            {/* card content */}
            <div style={{ padding: "0px 10px" }}>
              <h2>Title</h2>
              <p>
                lorem ipsum is imply dummy text of the prining and typesetting
                industry printing and typesetting industry.
              </p>
              <span>
                READ
                <br />
                More
              </span>
              {/* <div>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          <a><img src="" alt= ""/></a>
          </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <Updatecard /> */}

      {/* Upcoming Event */}
      <div className="upcoming_event">
        <h1>Upcoming Event</h1>
        <hr
          style={{
            width: "100px",
            textAlign: "center",
            border: "3px solid #54B5BF",
          }}
        />

        <div className="upcoming_event_cards">
          {/* spiritual Service card */}
          <div className="spiritual_service_card">
            <img src="./Assets/Rectangle16.png" alt="" />
            <small>TIME : 09:30 AM TO 12:00 PM</small>
            <h2>Spiritual Service</h2>
            <hr
              style={{
                width: "80px",
                textAlign: "center",
                border: "3px solid #F56C2A",
              }}
            />
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          {/* spiritual Service card */}
          <div className="spiritual_service_card">
            <img src="./Assets/Rectangle17.png" alt="" />
            <small>TIME : 09:30 AM TO 12:00 PM</small>
            <h2>Spiritual Service</h2>
            <hr
              style={{
                width: "80px",
                textAlign: "center",
                border: "3px solid #F56C2A",
              }}
            />
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>

          {/* spiritual Service card */}
          <div className="spiritual_service_card">
            <img src="./Assets/Rectangle18.png" alt="" />
            <small>TIME : 09:30 AM TO 12:00 PM</small>
            <h2>Spiritual Service</h2>
            <hr
              style={{
                width: "80px",
                textAlign: "center",
                border: "3px solid #F56C2A",
              }}
            />
            <p>
              lorem ipsum is imply dummy text of the prining and typesetting
              industry printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>

      {/* All_event */}
      <div className="all_event_nature">
        <h1
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontStyle: "normal",
            fontFamily: "Teko",
            fontWeight: "600",
            color: "#FF701A",
          }}
        >
          All{" "}
          <span
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontStyle: "normal",
              fontFamily: "Teko",
              fontWeight: "600",
              color: "grey",
            }}
          >
            | Events | Temples | Natures
          </span>
        </h1>

        <div className="event_pictures">
          <img src="./Assets/event11.png" alt="" />
          <img src="./Assets/event12.png" alt="" />
          <img src="./Assets/event13.png" alt="" />
          <img src="./Assets/event14.png" alt="" />
          <img src="./Assets/event15.png" alt="" />
          <img src="./Assets/event16.png" alt="" />
          <img src="./Assets/event17.png" alt="" />
          <img src="./Assets/event18.png" alt="" />
        </div>
      </div>

      {/* temples Map */}
      <div
        className="mappp"
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontStyle: "normal",
          fontFamily: "Teko",
          fontWeight: "500",
          letterSpacing: "0.08rem",
        }}
      >
        <h1>All Temples in our map</h1>
        <div
          className="temples_map_section"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/image5.png"
            })`,
          }}
        ></div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
