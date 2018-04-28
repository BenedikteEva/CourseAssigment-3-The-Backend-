import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import CheckboxForFoodTypes from './CheckboxForFoodTypes'
import UserSearchResult from './UserSearchResult';
import LoginAs from './LoginAs';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Home</h2>

                <div id="search">
                    <input placeholder="Location" id="4" />
                    <button id="8">search</button>
                </div>

                <div class="container">
                    <CheckboxForFoodTypes id="3" />
                    <UserSearchResult id="5b" />
                </div>

               <LoginAs /> 

            </div>
        )
    }

}

export default Home;
