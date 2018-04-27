import React, { Component } from "react";
import data from './dummyData/TestUsers.json';
import AddEditUsers from "./AddEditUsers";

const Users = () => {

    //Move the user data to a const
    const usersData = data.users;

    //The row for the table
    const row = usersData.map((user) => {
        return (

            <tr key={user.id}>
                <td>{user.id}</td><td>{user.userName}</td><td>{user.userRole}</td>
                <td><a href="" onClick={this.onEdit} id={user.id}>Edit</a> <a href="" onClick={this.onDelete} id={user.id}>Delete</a></td>
            </tr>

        )

    });

    return (
        <div>

            <table className="table">

                <thead>
                    <tr><th>Id</th><th>Name</th><th>User Role</th></tr>
                </thead>

                <tbody>
                    {row}
                </tbody>

            </table>

            <AddEditUsers />

        </div >
    );
}

export default Users;
