import React from 'react'
import StarwarsInfo from './StarwarsInfo';
import Restaurants from './Restaurants';
import apiFacade from './apiFacade';
import Users from './Users'
const About = () => {

  const userRole = apiFacade.getRole();

  var view = <p>You have to login to see this page!</p>;

  if (userRole === "user") {
    view = <Restaurants />

  } else if (userRole === "admin") {
    view = <Users />
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
