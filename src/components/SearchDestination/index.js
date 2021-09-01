import React from "react";
import "./SearchDestination.css";

function SearchDestination() {

  return (
    <>
      <div className="tour_search_section">
        {/* temple search */}
        <div className="temple_search location">
        <i class="bx bx-map"></i>
            <input
                placeholder="Search Temple / Destination"
                type="location"
                name="password"
                required
                // onChange={this.handleChange}
              />
        </div>

        {/* date */}
        <div className="temple_search date">
        <input    
            placeholder="Date"
            type="date"
            name="password"
            required
            // onChange={this.handleChange}
          />

        </div>

        {/* traveller */}
        <div className="temple_search traveller">
        <i class="bx bx-user"></i>
        <input    
            placeholder="1 Traveller"
            type="traveller"
            name="password"
            required
            // onChange={this.handleChange}
          />  
        </div>

        {/* submit button */}
        <div className="temple_search_btn">
          <button type="submit" className="search_button">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchDestination;
