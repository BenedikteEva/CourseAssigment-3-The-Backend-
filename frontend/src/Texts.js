import React, { Component } from 'react';
import facade from './apiFacade';
import jwtDecode from 'jwt-decode';


class Texts extends Component {
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
        <p>Name: {this.state.username}</p>
        <p>Role: {this.state.userroles}</p>
      </div>
    )
  }


}

export default Texts;