import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import {isAuthenticated} from '../../Utils/Authservice';
import '../../Styles/App.css';

class Home extends Component {

    render() {
        debugger;
        return (
                isAuthenticated()?<Redirect to={"/main"}/>:
                    <div id="header">
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Intro</span>
                        <span className="heading-primary-sub">Thats the starting page</span>
                    </h1>
                    <Link to="/login" className="btn btn-white btn-animated">Login</Link>
                    <Link to="/signup" className="btn btn-white btn-animated">SignUp</Link>
                </div>
                    </div>
        );
    }
}

export default Home;
