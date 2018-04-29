import React from 'react';
import ApiFacade from './ApiFacade';

//The loginAs componenet shows if you are logged in as user or admin.
const LoginAs = () => {
    var view;
    const userRole = ApiFacade.getRole();
    const userName = ApiFacade.getUserName();
    
    if(userRole === "admin") {
        view = <p>Logged in as: admin, {userName}</p>
    } if(userRole === "user") {
        view = <p>Logged in as: user, {userName}</p>
    } else {
        view = <p>You are not logged in.</p>
    }

    return (
        <div>
            
            {view}
        
        </div>
    )
}

export default LoginAs;
