import React, { Component } from 'react';
import {isAuthenticated} from './Utils/Authservice'
import Login from "./Components/Loginpage/Login";
import Home from "./Components/HomePage/Homepage";
import MainPage from './Components/MainPage/MainPage';
import Container from './Components/Container/Container';
import SignupPage from "./Components/SignupPage/SignupPage"
import {createBrowserHistory} from 'history';
import {Router,Route,Redirect,Switch,} from 'react-router-dom';
import {} from 'react-router';
class App extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
      return (
        <Router history={createBrowserHistory()} >
            <div id="header" >
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/main" component={MainPage}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/signup' component={SignupPage}/>
                    </Switch>
                </div>
        </Router>
  );
  }
}

export default App;
