import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className='content'>
            <div className='left box'>
              <div className='upper'>
                <div className='topic'>About us</div>
                <p>
                  irononcarpetlabels.com is a subsidiary of Allied Print &
                  Design.
                </p>
                <p>6833 N 21st Avenue</p>
                <p>Phoenix, AZ 85015</p>
                <p>Phone 602-995-4888</p>
                <p>Fax 602-995-4885</p>
              </div>
              <div className='lower'>
                <div className='topic'>Contact us</div>
                <div className='phone'>
                  <a href='#'>
                    <i class='fas fa-phone-volume'></i>1 602 995 4888
                  </a>
                </div>
                <div className='email'>
                  <a href='#'>
                    <i class='fas fa-envelope'></i>
                    graphics@alliedprintdesign.com{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className='middle box'>
              <div className='topic'>Our Services</div>
              <div>
                <a href='https://www.alliedprintdesign.com/print-services/'>
                  Printed Products
                </a>
              </div>
              <div>
                <a href='https://www.alliedprintdesign.com/print-services/'>
                  Print Services
                </a>
              </div>
              <div>
                <a href='https://www.alliedprintdesign.com/get-estimate/'>
                  Estimate Request
                </a>
              </div>
            </div>
            <div className='right box'>
              <div className='topic'>Subscribe us</div>

              <div className='media-icons'>
                <a href='https://www.facebook.com/AlliedPrintDesign/?fref=ts'>
                  <i class='fab fa-facebook-f'></i>
                </a>
                <a href='#'>
                  <i class='fab fa-instagram'></i>
                </a>
                <a href='#'>
                  <i class='fab fa-twitter'></i>
                </a>
                <a href='#'>
                  <i class='fab fa-youtube'></i>
                </a>
                <a href='#'>
                  <i class='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <p>
              Copyright © 2021 <a href='#'>303dog</a> All rights reserved
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
