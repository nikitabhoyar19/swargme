import React from "react";
import "./Checkbox.css";

const Checkbox = () => {
  return (
    
    <div className="Products_option_check">
      
        <h2>Categories</h2>
      {/*  */}
      <label>
        Idols
        <input name="isGoing" type="checkbox" />
      </label>

      {/*  */}
      <label>
        Ayurvedic
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Jewels
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Ceramic
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Decors
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Brass
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Glass
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Stones
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Wood
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Shankh
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Books
        <input name="isGoing" type="checkbox" />
      </label>

      <label>
        Rudraksh
        <input name="isGoing" type="checkbox" />
      </label>
    </div>
  );
};

export default Checkbox;
