import React, { Component } from 'react';
import {finishAuthentication,isAuthenticated} from '../../Utils/Authservice';
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
            axios.post('http://localhost:1234/login', {username,password})
                .then(function (response) {
                    console.log(response.data);
                    finishAuthentication(response.data.token);
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
        return (<div>
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
                <button onClick={this.onLoginSubmit}>Submit</button>
                <button onClick={this.CheckAuth}>Auth Check</button>

            </div>
        );
    }
}

export default Login;
