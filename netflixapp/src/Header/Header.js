import React from 'react';
import './Header.css';

const Headers = ()=>{
    return(
      <header>

        <div className="container-fluid">
        <div className="row">
          <div className="col-lg col-md col-sm-3 headerLeft">
            <img src="https://i.ibb.co/hVnQZTZ/netflix-logo-png-2582.png" id="logoHeader"></img>
          </div>
          <div className="col-lg col-md col-sm-6 headerRight">
            <select id="languageDropdownHeader">
              <option value="English">English</option>
              <option value="Chinese">Chinese</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Spanish">Spanish</option>
            </select>
            
            <button type="button" id="headerLoginButton" className="btn btn-primary">Login</button>
          </div>
        </div>
    
    
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
      </header>



    )
}

export default Headers;