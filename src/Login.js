import React, { Component } from 'react';
import axios from "axios";
import './script';
import './App.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "",password:"" };
        this.handlechangeu = this.handlechangeu.bind(this);
        this.handlechangep = this.handlechangep.bind(this);
        this.onLoginSubmit= this.onLoginSubmit.bind(this);
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
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            //   fetch('http://localhost:1234/login', {
            //     method: 'POST',
            //     body: JSON.stringify({username,password}),
            //     headers: { 'Content-Type': 'json' }
            // }).then(result => {
            //         // if (!result.token) {
            //         //     this.setState({loginError: result.message})
            //         //     return
            //         // }
            //         //this.props.auth.finishAuthentication(result.token)
            //         //this.context.router.push('/profile')
            //     return result;
            // }).then(result => { console.log(result);});
        }
    }
    render() {

        return (<div id="header">
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

            </div>
        );
    }
}

export default Login;
