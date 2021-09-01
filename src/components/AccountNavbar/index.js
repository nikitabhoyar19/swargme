import React from "react";
import "./AccountNavbar.css";
import { Link } from "react-router-dom";

class AccountNavbar extends React.Component {

  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;

    return (
      <>
          <nav className="navbar orange_navbar">
          {/* menu icon */}
          <div className="menus" onClick={this.menuToggle}>
            <i class="bx bx-menu"></i>
          </div>

          <ul className={toggle ? "toggle" : ""}>
            <li className="close" onClick={this.menuToggle}>
              X
            </li>

            
            <li className="nav-item">
              <Link to="/" className="nav-links">
                
              </Link>
            </li>

            {/* home */}
            <li className="nav-item">
              <Link to="/" className="nav-links">
                HOME
              </Link>
            </li>

            {/* tour */}
            <li className="nav-item">
              <Link to="/Tour" className="nav-links">
                TOUR
              </Link>
            </li>

            {/* pooja and hawan */}
            <li className="nav-item">
              <Link to="/Pooja1" className="nav-links">
                POOJA & HAWAN
              </Link>
            </li>

            {/* live/online darshan */}
            <li className="nav-item">
              <Link to="/LiveDarshan1" className="nav-links">
                LIVE/ONLINE DARSHAN
              </Link>
            </li>

            {/* products */}
            {/* </li> */}
            <li className="nav-item">
              <Link to="/" className="nav-links">
                PRODUCTS
              </Link>
            </li>

            {/* virtual pooja */}
            <li className="nav-item">
              <Link to="/" className="nav-links">
                VIRTUAL POOJA
              </Link>
            </li>

            {/* ayurvedic & wellness */}

            {/* contact us */}
            <li className="nav-item">
              <Link to="/" className="nav-links">
                CONTACT US
              </Link>
            </li>

            {/* login/SignUp */}
            <li className="nav-item">
              <Link to="/Login" className="nav-links">
                LOGIN / SIGNUP
              </Link>
            </li>

            <li className="nav-item nav_profle">
              <Link to="/" className="nav-links"
              style={{paddingRight: "85px",}}>
                <img src="./Assets/profilepic.png" alt="" />
              </Link>
            </li>


            <li className="nav-item">
              <Link to="/Login" className="nav-links">
              </Link>
            </li>


            {/* donate button */}
            <Link to="/" className="donate">
              <button className="btn donate_btn">DONATE</button>
            </Link>

            {/* Add Your Temple button */}
            <Link to="/" className="add_temple">
              <button className="btn add_temple_btn">ADD YOUR TEMPLE</button>
            </Link>
          </ul>
        </nav>
 
    </>
    );
 
 }
}

export default AccountNavbar;
