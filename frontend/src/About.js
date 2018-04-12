import React from 'react'
import Login, { LoggedIn } from './Login';

const About = ( {data} ) => {
  const userRole = data;
  console.log(userRole);
  var view = <p>You have to login to see this page!</p>;

  if(userRole === "user") {
    view = <p>user stuff</p>
    
  } else if(userRole === "admin") {
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