import React, { Component } from "react";
import data from './dummyData/TestUsers.json';
import AddEditUsers from "./AddEditUsers";
import Profile from './UserProfile'




export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { userid: "" }
  }

  onEdit =async (evt) => {
      this.setState({userid: evt.target.value})
 evt.preventDefault();

await console.log(evt)
  } 
  onDelete = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }

  render(){
   const row = data.users.map((user) => {
   
       return (

           <tr key={user.id}>
               <td>{user.id}</td><td>{user.userName}</td><td>{user.userRole}</td>
               <td><a href="" onClick={this.onEdit} id={user.id}>Edit</a> <a href="" onDelete={this.onDelete} id={user.id}>Delete</a></td>
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
}}
