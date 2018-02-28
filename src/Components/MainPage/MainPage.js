import React, { Component } from 'react';
import {logout,isAuthenticated} from '../../Utils/Authservice';
import {Link,Redirect} from 'react-router-dom';


class MainPage extends Component {

    constructor(props)
    {
        super(props)
        this.state={value:""}
    this.handleKeypress = this.handleKeypress.bind(this);
    }

    handleKeypress(event)
    {
        var key = event.keyCode;
        var k = String.fromCharCode((96 <= key && key <= 105) ? key-48 : key)
        this.setState(prevState => ({
            value: prevState.value + k
        }));
        console.log(key);
    }
    componentWillMount() {
        console.log("in this function")
        document.addEventListener("keydown", this.handleKeypress);
    }

    LogOut()
    {
        logout();
    }

    render() {
        return (
            !isAuthenticated()?<Redirect to={"/"}/>:<div style={{display:"flex",justifyContent: "flex-end"}}>
                <div id="header">
                <Link to="/" onClick={this.LogOut} className="btn btn-white btn-animated" style={{marginTop:"20px"}}>Logout</Link>
            <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Type</span>
                        <span className="heading-primary-sub">{this.state.value}</span>
                    </h1>

                </div>
            </div>
            </div>
        );
    }
}

export default MainPage;
