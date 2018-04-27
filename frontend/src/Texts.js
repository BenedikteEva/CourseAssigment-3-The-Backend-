import React, { Component } from 'react';
import ApiFacade from './ApiFacade';
class Texts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataFromServer: "Fetching!!",
    };
  }

  componentDidMount() {
    try {
      ApiFacade.fetchData().then(res => this.setState({ dataFromServer: res }));
    } catch (error) {

    }
  }

  render() {
    const userName = ApiFacade.getUserName();
    const userRole = ApiFacade.getRole();

    return (
      <div>

        <h2>Data Received from server</h2>
        <h3>{this.state.dataFromServer}</h3>

        <p>Name: {userName}</p>
        <p>Role: {userRole}</p>

      </div>
    )
  }
}

export default Texts;