import React from 'react'
import StarwarsInfo from './StarwarsInfo';
import apiFacade from './apiFacade';

const About = ({ data }) => {

  const userRole = apiFacade.getRole();

  var view = <p>You have to login to see this page!</p>;

  if (userRole === "user") {
    view = <StarwarsInfo />

  } else if (userRole === "admin") {
    view = <p>Admin stuff</p>
  }

  return (
    <div>

      <h2>About this App</h2>
      <p>something about this App</p>
      <p>{userRole}</p>

      {view}

    </div>
  )
};

export default About;
