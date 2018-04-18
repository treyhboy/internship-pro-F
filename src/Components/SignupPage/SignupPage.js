import React, { Component } from 'react';
import {isAuthenticated,finishAuthentication} from '../../Utils/Authservice';
import axios from "axios";
import {Redirect} from 'react-router-dom';
import {createBrowserHistory as history} from 'history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignupPage extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "",password:"" ,name:""};
        this.handlechangeu = this.handlechangeu.bind(this);
        this.handlechangep = this.handlechangep.bind(this);
        this.handlechangen = this.handlechangen.bind(this);
        this.onSignUpSubmit= this.onSignUpSubmit.bind(this);
    }

    handlechangeu(e) {
        this.setState({username: e.target.value });
    }
    handlechangep(e) {
        this.setState({password: e.target.value });
    }
    handlechangen(e) {
        this.setState({name: e.target.value });
    }
    onSignUpSubmit(event) {
        event.preventDefault()
        const { username, password } = this.state
        if (username && password) {
            axios.post('https://int-app-backend.herokuapp.com/signup', {username,password})
                .then(function (response) {
                    console.log(response.data);
                    console.log(history().location);
                    finishAuthentication(response.data.token);
                    setTimeout(history().go("/main"),1000);
                    console.log(history().location);
                })
                .catch(function (error) {
                    toast.error(error,
                        {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 2000,
                            closeButton: false // Remove the closeButton
                        });
                    console.log(error);
                });
        }
    }
    render() {

        return (isAuthenticated()?<Redirect to={'/main'}/>:<div id="heade">
                <ToastContainer />
                <div className="limiter">
                    <div className="container-login100" >
                        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                            <form className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						Sign Up
					</span>

                                <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is required">
                                    <span className="label-input100">Name</span>
                                    <input className="input100" type="text" name="username" onChange={this.handlechangen} placeholder="Type your Name" value={this.state.value}/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is required">
                                    <span className="label-input100">Username</span>
                                    <input className="input100" type="text" name="username" onChange={this.handlechangeu} placeholder="Type your username" value={this.state.value}/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <span className="label-input100">Password</span>
                                    <input className="input100" type="password" name="pass" onChange={this.handlechangep} placeholder="Type your password" value={this.state.value} />
                                    <span className="focus-input100" ></span>
                                </div>

                                <div className="text-right p-t-8 p-b-31">

                                </div>

                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn" onClick={this.onSignUpSubmit}>
                                            Sign up
                                        </button>
                                    </div>
                                </div>

                                <div className="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Sign Up Using
						</span>
                                </div>

                                <div className="flex-c-m">
                                    <a href="#" className="login100-social-item bg1">
                                        <i className="fa fa-facebook"></i>
                                    </a>

                                    <a href="#" className="login100-social-item bg2">
                                        <i className="fa fa-twitter"></i>
                                    </a>

                                    <a href="#" className="login100-social-item bg3">
                                        <i className="fa fa-google"></i>
                                    </a>
                                </div>

                                <div className="flex-col-c p-t-155">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div id="dropDownSelect1"></div>
            </div>
        );
    }
}

export default SignupPage;
