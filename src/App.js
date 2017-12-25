import React, { Component } from 'react';
import './script';
import './App.css';

class App extends Component {

  render() {

    return (<div id="header">
          <div className="text-box">
          <h1 className="heading-primary">
          <span className="heading-primary-main">Typing</span>
          <span className="heading-primary-sub">is where you press keys</span>
      </h1>
      <a href="#" className="btn btn-white btn-animated">Login</a>
          <a href="#" className="btn btn-white btn-animated">SignUp</a>
          </div>
          </div>
    );
  }
}

export default App;
