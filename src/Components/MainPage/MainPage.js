import React, { Component } from 'react';
import {logout,isAuthenticated} from '../../Utils/Authservice';
import {Panel,ListGroup,ListGroupItem,FormControl} from 'react-bootstrap';
import {Link,Redirect} from 'react-router-dom';
import FriendList from './FriendList/FriendList';
import styled from 'styled-components';

const Col = styled.div`
display: flex;
flex-flow: column;

`;
const Mbox = styled.div`
display: flex;
flex-flow:column;
max-height: 800px;
min-width: 400px;
background-color: #777777;
`
const Head = styled.div`
display: flex;
flex-flow: Row;
min-height: 80px;
min-width: 1040px;
background-color: #666666;
`
const Cbox = styled.div`
min-height: 670px;
min-width: 1040px;

`;
const Space = styled.div`
min-width:900px;
`
const Row = styled.div`
display: flex;
flex-flow: Row;
justify-content: space-between;

`;
const Tspace = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-width: 1040px;
min-height: 76px;
background-color: #adadad;
`
const Chead = styled.div`
min-width: 100px;
min-height: 80px;
`
const Search = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-width: 400px;
min-height: 60px;
background-color: #d9d9d9;
`
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

    LogOut()
    {
        logout();
    }

    render() {
        return (
            !isAuthenticated()?<Redirect to={"/"}/>:<div>
                <Row>
                    <Col>
                        <Mbox>
                            <Chead/>
                            <Search>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Search friend here"
                                    onChange={this.handleChange}
                                />
                            </Search>
                            <FriendList/>
                        </Mbox>
                    </Col>
                    <Col>
                        <Row>
                            <Head>
                                <Space/>
                                <Link to="/" onClick={this.LogOut} className="btn btn-white btn-animated" style={{marginTop:"20px"  }}>Logout</Link>
                            </Head>
                        </Row>
                        <Row>
                        <Cbox>
                            <Message>Hello</Message>
                            <Message right={true}>Hey</Message>
                            <Message>How are you ??</Message>
                        </Cbox>
                        </Row>
                        <Row>
                            <Tspace>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Type here"
                                    onChange={this.handleChange}
                                />
                            </Tspace>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MainPage;
