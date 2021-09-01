import React, {useState} from "react";
import "./Products.css";
import Navbar from "../../components/Navbar";
import SearchProducts from "../../components/SearchProducts";
import Checkbox from "../../components/Checkbox";
import ProductPrice from "../../components/ProductPrice";
import Amenities from "../../components/Amenities";
import Footer from "../../components/Footer";

function Products() {

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
          <SearchProducts />

          <div className="Products_background">
            {/* categories price section */}
            <div className="Products_cat_price_section">
                <Checkbox />

                <ProductPrice />
            </div>

            {/* Product Choice container */}
           <div className="Products_rel_choice">
              {/*  */}
              <div></div>

              {/* images */}
              <div className="product_img_container">
                {/* first img */}
                <div className="tour_darshanimg first"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/Assets/ganesh_pooja.png"
                    })`,
                  }}
                >
                  <div className="black_box">
                    <p>
                      <a href="/Pooja3"> Kashi Vishvanath</a>
                    </p>
                  </div>
                </div>
              
                <div className="tour_darshanimg first"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/Assets/ganesh_pooja.png"
                    })`,
                  }}
                >
                  <div className="black_box">
                    <p>
                      <a href="/Pooja3"> Kashi Vishvanath</a>
                    </p>
                  </div>
                </div>
                <div className="tour_darshanimg first"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/Assets/ganesh_pooja.png"
                    })`,
                  }}
                >
                  <div className="black_box">
                    <p>
                      <a href="/Pooja3"> Kashi Vishvanath</a>
                    </p>
                  </div>
                </div>
                <div className="tour_darshanimg first"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/Assets/ganesh_pooja.png"
                    })`,
                  }}
                >
                  <div className="black_box">
                    <p>
                      <a href="/Pooja3"> Kashi Vishvanath</a>
                    </p>
                  </div>
                </div>
                <div className="tour_darshanimg first"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/Assets/ganesh_pooja.png"
                    })`,
                  }}
                >
                  <div className="black_box">
                    <p>
                      <a href="/Pooja3"> Kashi Vishvanath</a>
                    </p>
                  </div>
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

export default Products;
