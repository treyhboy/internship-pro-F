import React, { Component } from 'react';
import {finishAuthentication,isAuthenticated} from '../../Utils/Authservice';
import {createBrowserHistory as history} from 'history';
import {Redirect} from 'react-router-dom';
import axios from "axios";
import "./css/main.css";
import "./css/util.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            axios.post('https://int-app-backend.herokuapp.com/login', {username,password})
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
    CheckAuth(){
        console.log(isAuthenticated());
    }
    render() {
        return (
            isAuthenticated()?<Redirect to={'/main'}/>:<div id="heade">
                <ToastContainer />
                <div className="limiter">
                    <div className="container-login100" >
                        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                            <form className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						Login
					</span>

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
                                    <a href="#">
                                        Forgot password?
                                    </a>
                                </div>

                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn" onClick={this.onLoginSubmit}>
                                            Login
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
						<span className="txt1 p-b-17">
							Or Sign Up Using
						</span>

                                    <a href="#" className="txt2">
                                        Sign Up
                                    </a>
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

export default Login;
