import React, { Component } from "react"

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
        <h1>
        <CardText>Welcome</CardText>
        </h1>
        <h2>Login</h2>

        <form onSubmit={this.login} onChange={this.onChange} >
          <Input placeholder="User Name" id="username" />
          <Input placeholder="Password" id="password" />
          <Button color="success" >Login</Button>
        </form> </div>


    )
  }
}
