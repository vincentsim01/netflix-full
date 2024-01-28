import React from 'react';
import "./banner.css";

const Bannery = () => {


    return(
        <div className="bannerContainer">

        <div className="row">
          <h1 id="unlimitedFilms">Unlimited films, TV programmes and more</h1>
    
    
        </div>
    
        <div className="row">
          <h4 id="watchAnywhere">Watch anywhere. Cancel at any time.</h4>
    
    
        </div>
    
        <div className="row">
          <h4 id="readyToWatch">Ready to watch? Enter your email to create or restart your membership.</h4>
    
    
        </div>
    
        <div className="lastHeader">
          <div className="headerSignUp">
            <input type="text" id="emailText" placeholder="Email Address"></input>
    
          </div>
          <div className="headerSignUp">
            <button className="btn btn-primary" id="getStartedButton" type="button">Get Started</button>
            
          </div>
    
    
        </div>
        
        
        
        </div>
    )
}




export default Bannery;