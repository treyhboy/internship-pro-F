import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import {isAuthenticated} from '../../Utils/Authservice';


class Home extends Component {

    render() {
        debugger;
        return (
                isAuthenticated()?<Redirect to={"/main"}/>:
                    <div id = "header">
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Typing</span>
                        <span className="heading-primary-sub">is where you press keys</span>
                    </h1>
                    <Link to="/login" className="btn btn-white btn-animated">Login</Link>
                    <Link to="/signup" className="btn btn-white btn-animated">SignUp</Link>
                </div>
                    </div>
        );
    }
}

export default Home;
