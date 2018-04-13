import React, { Component } from "react"
import facade from "./apiFacade";
import { Alert } from 'reactstrap';
import { HashRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import './App.css';
import Login, { LoggedIn } from './Login'
import { About } from './Texts'
import starwarstheme from './starwars-theme.jpg';


const Navigation = (props) => {

  var userRole = props.userRole;

  if (userRole === "user") {
    var navigationView = <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
  }

  return (
    <div>
       <Alert color="success">
       Welcome to intro site.
      </Alert>

      <Alert color="secondary">
       <a href="Login" className="alert-link"> Example link to refresh to Login page or easily set to another page. </a>
      </Alert>

      <ul className="header">
       
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        {navigationView}
        <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
      
      </ul>

      <div >
        <img src={starwarstheme} className="imgPreview" />
    </div>


    </div>
  )

}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //userroles: this.props.userroles
      userroles: ""
    }
  }

  render() {

    var userRole = this.props.userroles;
    console.log('App: ' + userRole);
    return (
      <div>

        <HashRouter>
          <div>

            <Navigation userRole={userRole} />

            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/Login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>

        </HashRouter>

        {/* <hr /> */}

        <main>
        </main>

        {/* <SeedFooter></SeedFooter> */}

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