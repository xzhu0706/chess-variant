import React, { Component } from 'react'
import Amplify, {Auth} from 'aws-amplify'
import {
    Row, Col, Image, ListGroup, ListGroupItem, Table
} from 'react-bootstrap'


export default class Account extends Component {
    constructor(props){
        super(props)
        this.state ={
            username: 'chessplayer',
            email: 'example@email.com',
            phone: '111-111-1111'
        }
    };

    async componentDidMount() {
        const user = await Auth.currentUserInfo();
        if (user) {
          this.setState({
            username: user.username,
            email: user.attributes.email,
            email_verified: user.attributes.email_verified,
            phone_number: user.attributes.phone_number,
            phone_verified: user.attributes.phone_number_verified
          });
        }
      }

    render() {
        return (
            <Profile 
                username={this.state.username}
                email={this.state.email}
                phone={this.state.phone_number}
            />
        )
    }
}

const Profile = (props) => (
        <div>
                <Row>
                <Col sm={{ span: 2, offset: 2}}>
                    <AccountInfo 
                        username={props.username}
                        email={props.email}
                        phone={props.phone}
                    />
                    </Col>
                        <MatchHistory/>
                    <Col sm= {{ span: 6}}>
                    </Col>
                </Row>
        </div>
    )

const AccountInfo = (props) => (
    <div>
                    
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/250px-ChessSet.jpg' thumbnail />
                        <ListGroup>
                            <ListGroupItem variant="flush">{props.username}</ListGroupItem>
                            <ListGroupItem>{props.email}</ListGroupItem>
                            <ListGroupItem>{props.phone}</ListGroupItem>
                        </ListGroup>    
    </div>
)

const MatchHistory = (props) => (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Variant</td>
                    <td>Opponent</td>
                    <td>Variant</td>
                    <td>Outcome</td>
                    <td>end FEN</td>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
    </div>
)