import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import {isAuthenticated} from '../../Utils/Authservice';
import PPic from './Upload';
import WrappedApp from './UserForm';
import { Avatar ,Card} from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const Header = styled.div`
display: flex;
flex-flow: Row;
justify-content: space-between;
background-color: #666666;
min-height: 80px;
min-width: 100%;
`;
const Logo = styled.h1`
font-size: 50px;
color: white;
`
const Content = styled.div`
display:flex;
flex-flow: Row;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`
const Row = styled.div`
display:flex;
flex-flow: column;
margin-top: 50px;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
background-color: #adadad;
`


class ProfilePage extends Component {

    render() {
        debugger;
        return (
            !isAuthenticated()?<Redirect to={"/home"}/>:
                <div>
                <Header><Logo>User</Logo></Header>
                    <Content>
                        <Row>
                        <PPic/>
                        <WrappedApp/>
                        </Row>
                    </Content>

                </div>


        );
    }
}

export default ProfilePage;
