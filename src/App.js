import React, { Component } from 'react';
import {isAuthenticated} from './Utils/Authservice'
import Login from "./Components/Loginpage/Login";
import Home from "./Components/HomePage/Homepage";
import MainPage from './Components/MainPage/MainPage';
import Container from './Components/Container/Container';
import SignupPage from "./Components/SignupPage/SignupPage"
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

class App extends Component {

  render() {

    return (
        <Router>
                <div id="header">
                    <Redirect from={"/"} to="/home"/>
                    <Switch>
                    <Route path="/home" component={isAuthenticated()? MainPage:Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={SignupPage}/>
                    </Switch>
                </div>
        </Router>
  );
  }
}

export default App;
