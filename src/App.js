import React, { Component } from 'react';
import Login from "./Login";
import Home from "./Homepage";
import {BrowserRouter as Router,Route,} from 'react-router-dom';

class App extends Component {

  render() {

    return (
        <Router>
            <div>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            </div>
        </Router>
  );
  }
}

export default App;
