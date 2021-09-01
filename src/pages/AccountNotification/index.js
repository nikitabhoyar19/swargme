import React from "react";
import "./AccountNotification.css";
import { useHistory } from "react-router-dom";
import AccountNavbar from "../../components/AccountNavbar";
import Dashboard from "../../components/Dashboard";

function AccountNotification() {
  const history = useHistory();

    return (
      <>
        {/* navbar */}
        <AccountNavbar />

        {/* banner */}
        <div className="Account_Banner"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/Assets/logsign.png"
                  })`,
                }}
        >

          {/* dashboard */}
          <Dashboard />

           {/* acnt main section */}
          <div className="Account_acnt_section">
            <div className="Account_content_section">
                    <p>Notification</p>
                    <hr />
                 {/* Acccount section for Notification */}
                 <div className="acnt_notification_section">

                {/* card 1 */}
                 <div className="note_bar">
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Nullam arcu neque, tincidunt sit amet dui vitae, accumsan
                   vestibulum turpis. Quisque ac nulla id eros interdum eleif
                   end vel id ex.
                   </p>

                   <button className="dismiss_note" type="submit" onClick={() => history.push("/")}>
                   Dismiss
                  </button>
                 </div>
                
                {/* card 2 */}
                <div className="note_bar">
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Nullam arcu neque, tincidunt sit amet dui vitae, accumsan
                   vestibulum turpis. Quisque ac nulla id eros interdum eleif
                   end vel id ex.
                   </p>

                   <button className="dismiss_note" type="submit" onClick={() => history.push("/")}>
                   Dismiss
                  </button>
                 </div>
 
                {/* card 3 */}
                <div className="note_bar">
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Nullam arcu neque, tincidunt sit amet dui vitae, accumsan
                   vestibulum turpis. Quisque ac nulla id eros interdum eleif
                   end vel id ex.
                   </p>

                   <button className="dismiss_note" type="submit" onClick={() => history.push("/")}>
                   Dismiss
                  </button>
                 </div>
                
                {/* card 4 */}
                <div className="note_bar">
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Nullam arcu neque, tincidunt sit amet dui vitae, accumsan
                   vestibulum turpis. Quisque ac nulla id eros interdum eleif
                   end vel id ex.
                   </p>

                   <button className="dismiss_note" type="submit" onClick={() => history.push("/")}>
                   Dismiss
                  </button>

                 </div>
 
                 </div>

               {/* Dismiss All Button */}
               <button className="dismiss_all_button" type="submit" onClick={() => history.push("/")}>
                   Dismiss All
               </button>

            </div>
          </div>

        </div>
     </>
    );

}

export default AccountNotification;
