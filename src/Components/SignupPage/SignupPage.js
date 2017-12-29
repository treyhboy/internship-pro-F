import React, { Component } from 'react';
import {finishAuthentication} from '../../Utils/Authservice';
import axios from "axios";

class SignupPage extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "",password:"" };
        this.handlechangeu = this.handlechangeu.bind(this);
        this.handlechangep = this.handlechangep.bind(this);
        this.onSignUpSubmit= this.onSignUpSubmit.bind(this);
    }

    handlechangeu(e) {
        this.setState({username: e.target.value });
    }
    handlechangep(e) {
        this.setState({password: e.target.value });
    }
    onSignUpSubmit(event) {
        event.preventDefault()
        const { username, password } = this.state
        if (username && password) {
            axios.post('http://localhost:6060/signup', {username,password})
                .then(function (response) {
                    console.log(response.data);
                    finishAuthentication(response.data.token);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    render() {

        return (<div >
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
                <button onClick={this.onSignUpSubmit}>Submit</button>

            </div>
        );
    }
}

export default SignupPage;
