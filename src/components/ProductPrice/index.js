import React from 'react'
import "./ProductPrice.css";

const ProductPrice = () => {
    return (
        <>
        <div className="Product_Price">
            <div className="prod_btn_sec">
                <button>min</button>
                <button>max</button>
            </div>
        </div>

        <div className="Product_cat_price_mobile">
         {/* categories */}
         <select>
         <option value="" disabled selected>
                  Category
                </option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="US">US</option>
              </select>

              <select>
              <option value="" disabled selected>
                  Price
                </option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="US">US</option>
              </select>

              <select>
                <option value="" disabled selected>
                Sort
              </option>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="US">US</option>
            </select>



         {/* price */}
        </div>
        </>
    )
}

export default ProductPrice
