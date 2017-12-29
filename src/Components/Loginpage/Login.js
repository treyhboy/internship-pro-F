import React, { Component } from 'react';
import {finishAuthentication,isAuthenticated} from '../../Utils/Authservice';
import {createBrowserHistory as history} from 'history';
import {Redirect,Link} from 'react-router-dom';
import axios from "axios";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "",password:"" };
        this.handlechangeu = this.handlechangeu.bind(this);
        this.handlechangep = this.handlechangep.bind(this);
        this.onLoginSubmit= this.onLoginSubmit.bind(this);
        this.CheckAuth = this.CheckAuth.bind(this);
    }

    handlechangeu(e) {
        this.setState({username: e.target.value });
    }
    handlechangep(e) {
        this.setState({password: e.target.value });
    }
    onLoginSubmit(event) {
        event.preventDefault()
        const { username, password } = this.state
        if (username && password) {
            axios.post('http://localhost:6060/login', {username,password})
                .then(function (response) {
                    console.log(response.data);
                    console.log(history().location);
                    finishAuthentication(response.data.token);
                    debugger;
                    history().go("/main")
                    console.log(history().location);
                debugger;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    CheckAuth(){
        console.log(isAuthenticated());
    }
    render() {
        return (
            isAuthenticated()?<Redirect to={'/main'}/>:
            <div>
                <input
                    placeholder="Enter Username"
                    value={this.state.value}
                    onChange={this.handlechangeu}
                />
                <input
                    placeholder="Enter Password"
                    value={this.state.value}
                    onChange={this.handlechangep}
                />
                <button  onClick={this.onLoginSubmit}>Submit</button>
                <button onClick={this.CheckAuth}>Auth Check</button>

            </div>
        );
    }
}

export default Login;
