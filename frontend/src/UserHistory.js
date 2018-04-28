import React, { Component } from "react";
import data from './dummyData/TestUsers.json';

const UserHistory = (props) => {
    var userData;

    //Move the user data to a const
    const usersData = data.users;

    //Find one user
    const oneUser = usersData.find(u => u.userName === props.user);
    console.log(oneUser);

    //Make a list of users venue history
    /* const venueHistoryList = oneUser.map( (venue) => {
        return(
           
                <li>{venue.venuehistory}</li>
           
        )
    }); */

    //The row for the table
    if (oneUser) {
        userData = <div>
            <h3>{oneUser.userName}</h3>
            <hr />
            <h4>Venue History</h4>
            <br />
        </div>
    } else {
        userData = <h2> Sorry. User does not exist! </h2>;
    }

    return (
        <div>

            {userData}

        </div >
    );
}

export default UserHistory;
