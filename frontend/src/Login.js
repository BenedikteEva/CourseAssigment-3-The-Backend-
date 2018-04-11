
import React, { Component } from "react"
import facade from "./ApiFacade";
import jwtDecode from 'jwt-decode';
export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }

  login = (evt) => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }

  render() {
    return (


      <div>
        <h1>Welcome</h1>
        <h2>Login</h2>
        <form onSubmit={this.login} onChange={this.onChange} >
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button>Login</button>
        </form> </div>


    )
  }
}

//https://auth0.com/blog/reactjs-authentication-tutorial/
// Se under afsnittet Adding Authentication to our ReactJS Front-end
// Og se her: https://www.npmjs.com/package/jwt-decode
export class LoggedIn extends Component {
  constructor(props) {
    super(props);

    var userToken = facade.getToken();
    var decoded = jwtDecode(userToken);
    var userName = decoded.sub; 
    var userRoles = decoded.roles;

    this.state = { dataFromServer: "Fetching!!", username : userName, userroles: userRoles };
  }

 

  componentDidMount() {
    try {
      facade.fetchData().then(res => this.setState({ dataFromServer: res }));
    } catch (error) {
      
    }

  }
  render() {
    if (!this.state.error === "") {
      console.log("render" + this.state.error);
      return (
        <ErrorPage error={this.state.error} />
      )
    } else {

      return (
        <div>
          <h2>Data Received from server</h2>
          <h3>{this.state.dataFromServer}</h3>
          <p>Name: { this.state.username } - Roles: { this.state.userroles }</p> 



        </div>

      )
    }

  }
}

const ErrorPage = (props) => {
  return (
    <div>
      <p>Fejl ved login</p>
      {console.log(props)}
      <p>{props.error}</p>
    </div>
  )
}


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
  }

  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }

  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }

  render() {
    return (
      <div>
        <div>

          {!this.state.loggedIn ? (<LogIn login={this.login} />) :
            (<div>
              <LoggedIn />
              <button onClick={this.logout}>Logout</button>
            </div>)}

        </div></div>
    )
  }
}