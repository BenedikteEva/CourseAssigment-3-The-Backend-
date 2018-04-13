import React, { Component } from "react";
import facade from "./apiFacade";
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LogIn from './Login';
import Texts from './Texts';
import About from './About';
import Home from './Home';
import Navigation from './Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    }
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

        <HashRouter>
          <div>

            <Navigation />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/texts" component={Texts} />
              <Route component={NoMatch} />
            </Switch>
          </div>

        </HashRouter>



        {!this.state.loggedIn ? (<LogIn login={this.login} />) :

          (<div>

            {/*  <Home /> */}
            <button onClick={this.logout}>Logout</button>
          </div>)}

      </div>
    );
  }
}

export default App;

const NoMatch = () => (
  <div>
    <h1>404 Wrong url!</h1>
  </div>
);

