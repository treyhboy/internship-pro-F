import React, { Component } from 'react';
import {logout,isAuthenticated} from '../../Utils/Authservice';
import {Link,Redirect} from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Head = styled.div`
display: flex;
flex-flow: Row;
justify-content: space-between;
min-height: 80px;
min-width: 1040px;
background-color: #00B8CD;
`
const Space = styled.div`
min-width:700px;
`

class MainPage extends Component {

    constructor(props)
    {
        super(props)
        this.state={value:""}
        this.handleKeypress = this.handleKeypress.bind(this);
        this.handlechange = this.handlechange.bind(this);
    }
    componentDidMount() {
        toast.success(" Login Successfull",
            {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                closeButton: false // Remove the closeButton
            });
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
    handlechange(event)
    {
        var k = event.target.value;
        this.setState({
            value: k
        });
    }

    LogOut()
    {
        logout();
    }

    render() {
        return (
            !isAuthenticated()?<Redirect to={"/"}/>:<div>
                <ToastContainer />
                <Head>
                    <Space/>
                    <Link to="/" onClick={this.LogOut} className="btn btn-white btn-animated" style={{marginTop:"20px"  }}>Logout</Link>
                </Head>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main" style={{marginTop:"70px"}}>Congrats</span>
                        <span className="heading-primary-sub" style={{marginTop:"50px",fontSize:"30px"}}> you have logged In !!</span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default MainPage;
