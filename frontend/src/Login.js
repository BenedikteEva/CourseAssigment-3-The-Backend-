import React, { Component } from "react"
import facade from "./apiFacade";
import jwtDecode from 'jwt-decode';
import App from './App';
import About from './About';

export default class LogIn extends Component {
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

export class LoggedIn extends Component {
  constructor(props) {
    super(props);

    var userToken = facade.getToken();
    var decoded = jwtDecode(userToken);
    var userName = decoded.sub;
    var userRoles = decoded.roles;

    this.state = {
      dataFromServer: "Fetching!!",
      username: userName,
      userroles: userRoles,
    };
  }

  getRole = () => {
    var userToken = facade.getToken();
    var decoded = jwtDecode(userToken);
    var userName = decoded.sub;
    var userRoles = decoded.roles;

    return userRoles;
  }

  componentDidMount() {
    try {
      facade.fetchData().then(res => this.setState({ dataFromServer: res }));
    } catch (error) {

    }
  }

  render() {

    return (
      <div>

        <h2>Data Received from server</h2>
        <h3>{this.state.dataFromServer}</h3>
      </div>
    )
  }
}

// <App userroles={this.state.userroles} />