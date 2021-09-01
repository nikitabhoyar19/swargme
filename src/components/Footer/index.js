import React from 'react'
import './Footer.css';

function Footer (){
    return (
      <>
      {/* mandir footer section */}
      <div className="mandir_footer">
          {/* contact section */}
          <div className="mandir_contact">
              <h2>CONTACT US</h2>
              <p>support@mandir.in</p>
              <p>Gurugram, Haryana</p>
          </div>

          {/* popular news section */}
          <div className="mandir_popular_news">
          <h2>POPULAR NEWS</h2>
          <p>20 Interesting Facts About <br /> Hinduism</p>
          <span>MAY 04, 2018</span>

          <p>Basics of Hinduism <br /> Explained</p>
          <span>MAY 04, 2018</span>
          </div>

          {/* Quick links */}
          <div className="mandir_important_links">
          <h2>QUICK LINKS</h2>
          <div className="quick_description">
              <div>
                  <p>Cultural Services</p>
                  <p>Hinduism Facts</p>
                  <p>Meetings</p>
              </div>
              <div>
                  <p>Events</p>
                  <p>Blog</p>
              </div>
          </div>
          <button className="btn get_in_touch">GET IN TOUCH</button>
          </div>

      </div>
      </>
    )
 }
    
 export default Footer
    
