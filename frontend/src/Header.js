import React from 'react';
import LOGO3 from './images/LOGO3.png'

function Title(props) {
  return <h2> {props.title}</h2>;
}

function Header() {

  return (
    
    <div className="Header">

      <header className="App-header">
        <img src={LOGO3} className="App-logo" alt="logo" id="centerImage" />
        <Title title="CuisineByChoice" />
      </header>

    </div>);
}

export default Header;