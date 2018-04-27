import React from 'react'
import  LOGO3 from './images/LOGO3.png' 
function Title(props){
    return <h2> {props.title}</h2>;
  }
  
  
  function Footer() {
    return ( <div className="Footer">
    <footer className="App-footer">
      <img src={LOGO3} className="App-logo" alt="logo" />
    <p>Cuisine By Choice - made by the DataBuilders 2018 </p>
    </footer>
    </div>);
  }
  
  
  
  
  export default Footer;
