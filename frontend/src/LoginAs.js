import React from 'react';
// import ApiFacade from './ApiFacade';
import facade from "./FakeFacade";






const LoginAs = () => {
    var view;

  if (facade.login.value!=null){
   
   const userName=facade.login.userName
    const userRole=facade.login.userRole
    console.log(userRole)
    if(userRole === "admin") {
        view = <p>Logged in as: admin, {userName}</p>
    } if(userRole === "user") {
        view = <p>Logged in as: user, {userName}</p>
    } else {
        view = <p>You are not logged in.</p>
    }
  }
    return (
        <div>
            
            {view}
        
        </div>
    )
}

export default LoginAs;

