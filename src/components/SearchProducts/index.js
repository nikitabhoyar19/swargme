import React from "react";
import "./SearchProducts.css";
import { useHistory } from "react-router-dom";


function SearchProducts() {
    const history = useHistory();

    return (
      <>
        {/* Search Pooja Container */}
        <div className="SearchPooja_Section">
          {/* Search box */}
          <div className="pooja_search">
            <i class="bx bx-map"></i>
            <input
              placeholder="Search Products "
              type="name"
              name="name"
              required
              // onChange={this.handleChange}
            />
          </div>

          {/* button */}
          <div className="pooja_search_btn">

          <button type="submit"
                      onClick={() => history.push("/")}>
                      Search</button>
          
          </div>
        </div>
      </>
    );
  
}

export default SearchProducts;

