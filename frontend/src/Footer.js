import React from 'react'
import  LOGO3 from './images/LOGO3.png' 

function Title(props){
    return <h2> {props.title}</h2>;
  }
    
  function Footer() {
    return ( 
      <div className="Footer">

        <footer className="App-footer">

          <p>
            <img src={LOGO3} className="App-logo" alt="logo"  />
            Cuisine By Choice - The DataBuilders 2018 
          </p>

        </footer>

      </div>
    );
  }
  
  export default Footer;
