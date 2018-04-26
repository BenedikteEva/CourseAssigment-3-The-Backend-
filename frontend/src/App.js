import Header from './Header'
import Footer from './Footer'
import React, { Component } from "react";
import facade from "./apiFacade";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LogIn from './Login';
import Texts from './Texts';
import About from './About';
import Home from './Home';
import Navigation from './Navigation';
import Users from './Users';
import RestaurantList from './RestaurantList'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    }
  }

  logout = () => {
    //Mangler at ændre urlen og gå til Home.
    <Redirect to="/" component={Home} />
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
            <Header />
            
            <Navigation />

            <Switch>
              <Route exact path="/" component={Home} />
              {/*<Route path="/UserHistory" component={UserHistory} />*/}
              {/*<Route path="/Profile" component={Profile} />*/}
              {/*<Route path="/Statistics" component={Statistics} />*/}
              {/*<Route path="/UserList" component={UserList} />*/}
              {/*<Route path="/Register" component={Register} />*/}
              <Route component={NoMatch} />
            </Switch>
          </div>

        </HashRouter>

        {!this.state.loggedIn ? (<LogIn login={this.login} />) :

          (<div>

            {/*  <Home /> */}
            <button onClick={this.logout}>Logout</button>
          </div>)}

        <Footer />

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