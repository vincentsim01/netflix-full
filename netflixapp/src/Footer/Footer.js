import React from 'react';

import './Footer.css';

const Footer = ()=>{
    return(


        <Footer>

        <div id="QuestionsCall">Questions? Call 800 852 6334</div>
        <br></br>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              
              FAQ<br></br>
              Investor Relation<br></br>
              Privacy<br></br>
              Speed Test<br></br>

              <select>
                <option value="english">English</option>
                <option value="chinese">Chinese</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select><br></br>

              Netflix Singapore
            </div>
            <div className="col-lg-3">
              Help Center<br></br>
              Jobs<br></br>
              Cookie Preferences<br></br>
              Legal Notice
            </div>
            <div className="col-lg-3">
              Account<br></br>
              Ways To Watch<br></br>
              Corporate Information<br></br>
              Only On Netflix
            </div>
            <div className="col-lg-3">
              Media Center<br></br>
              Terms Of Use<br></br>
              Contact Us<br></br>
              
            </div>




          </div>



        </div>




      </Footer>
    )

    
}


export default Footer;