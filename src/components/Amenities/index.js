import React from "react";
import "./Amenities.css";
import { useHistory } from "react-router-dom";


function Amenties() {
  const history = useHistory();

    return ( 
    <>
        <div className="Amenties_section">
         
        <h2>Amenities</h2>
         {/* amenties image container */}
         <div className="Amenties_image_container">
           {/* image 1 */}
           <div className="Amenties_section_small">
             <img src="/Assets/am1.png" alt="" />
             <p>Cheap Accomodation available</p>
           </div>
        
         {/* image 2 */}
         <div className="Amenties_section_small">
             <img src="/Assets/am2.png" alt="" />
             <p>AC/non-AC Transport(24 hrs)</p>
           </div>

         {/* image 3 */}
         <div className="Amenties_section_small">
             <img src="/Assets/am3.png" alt="" />
             <p>Puja, havan, prasad facilities available</p>
           </div>

         {/* image 4 */}
         <div className="Amenties_section_small">
             <img src="/Assets/am4.png" alt="" />
             <p>Emergency services within 2km</p>
           </div>

         {/* image 5 */}
         <div className="Amenties_section_small">
             <img src="/Assets/am5.png" alt="" />
             <p>Advance Booking available</p>
           </div>

          </div>
  
          {/* question secd container */}
          <div className="Amenties_ques_send">
            <h2>Got a question?</h2>

             <div className="Question_container">
               {/* name */}
               <div className="name">
             <input
               placeholder="name"
               type="name"
               name="name"
               required
               // onChange={this.handleChange}
             />
           </div>

           {/* phone number */}
           <div className="Phone">
             <input
               placeholder="Phone Number"
               type="name"
               name="number"
               required
               // onChange={this.handleChange}
             />
           </div>

           {/* email */}
           <div className="Email">
             <input
               placeholder="Email"
               type="email"
               name="email"
               required
               // onChange={this.handleChange}
             />
           </div>

           {/* send button */}
           <div className="question_send_button">
           <button type="submit"
                      onClick={() => history.push("/")}>
                      Send</button>

             </div>
           </div>
          </div>
       </div>

    </>   

    );
}

export default Amenties;
