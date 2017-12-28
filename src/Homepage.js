import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './script';
import './App.css';

class Home extends Component {

    render() {
        return (
            <div id="header">
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Typing</span>
                        <span className="heading-primary-sub">is where you press keys</span>
                    </h1>
                    <Link to="/login" className="btn btn-white btn-animated">Login</Link>
                    <Link to="#" className="btn btn-white btn-animated">SignUp</Link>
                </div>
            </div>
        );
    }
}

export default Home;
