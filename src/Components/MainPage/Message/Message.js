import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';

const Message = styled.div`
    display: flex;
    flex-flow: wrap;
    min-height: 20px;
	max-width: 290px;
	margin: ${props=>props.right?"0px 20px 0px 75%":"20px"}; 
	padding: 10px;
	background-color: #eeeeee;
	border-radius: 4px;
	box-shadow:0 2px 5px rgba(0, 0, 0, 0.3);
	font-family: 'Assistant',sans-serif;
	font-size: 17px;
`

class MessageBox extends Component {

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

export default MessageBox;
