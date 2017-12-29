import React, { Component } from 'react';
import {logout,isAuthenticated} from '../../Utils/Authservice';
import {Link,Redirect} from 'react-router-dom';


class MainPage extends Component {

    LogOut()
    {
        logout();
    }

    render() {
        return (
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Main Page</span>
                        <span className="heading-primary-sub">Welcome To Our App</span>
                    </h1>
                    <Link to="/" onClick={this.LogOut} className="btn btn-white btn-animated">Logout</Link>
                </div>
        );
    }
}

export default MainPage;
