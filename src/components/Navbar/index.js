import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
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

            <div className="navbar_links_container">
              {/* HOME */}
              <div onClick={this.menuToggle}>
                <Link to="/">
                  <li>HOME</li>
                </Link>
              </div>

              {/* TOUR */}
              <div onClick={this.menuToggle}>
                <Link to="/">
                  <li>TOUR</li>
                </Link>
              </div>

              {/* Pooja and Havan */}
              <div onClick={this.menuToggle}>
                <Link to="/">
                  <li>Pooja & HAWAN</li>
                </Link>
              </div>

              {/* LIVE/ONLINE DARSHAN */}
              <div onClick={this.menuToggle}>
                <Link to="/">
                  <li>LIVE/ONLINE DARSHAN</li>
                </Link>
              </div>

              {/* PRODUCTS */}
              <div onClick={this.menuToggle}>
                <Link to="/">
                  <li>PRODUCTS</li>
                </Link>
              </div>

              {/* VIRTUAL POOJA */}
              <div onClick={this.menuToggle}>
                <Link to="/">
                  <li>VIRTUAL POOJA</li>
                </Link>
              </div>

              {/* AYURVEDIC AND WELLNESS */}
              {/* <div onClick={this.menuToggle}>
                <Link to="/">
                  <li>Home</li>
                </Link>
              </div> */}

              {/* CONTACT US */}
              <div onClick={this.menuToggle}>
                <Link to="/">
                  <li>CONTACT US</li>
                </Link>
              </div>

              {/* LOGIN/SIGNUP */}
              <div onClick={this.menuToggle}>
                <Link to="/">
                  <li>LOGIN / SIGNUP</li>
                </Link>
              </div>
            </div>

            {/* donate button */}
            <div className="navbar_buttons">
              <div onClick={this.menuToggle}>
                <Link to="/Donate" className="donate">
                  <button className="btn donate_btn">DONATE</button>
                </Link>
              </div>

              {/* Add Your Temple button */}
              <div onClick={this.menuToggle}>
                <Link to="/AddTemple" className="add_temple">
                  <button className="btn add_temple_btn" type="submit">
                    ADD YOUR TEMPLE
                  </button>
                </Link>
              </div>
            </div>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
