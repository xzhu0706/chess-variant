import React, { Component } from 'react'
import {Auth} from 'aws-amplify'
import {
    Container, Row, Col, Image, ListGroup, ListGroupItem, Table
} from 'react-bootstrap'


export default class Account extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    };

    componentDidMount() {
        const user = Auth.currentUserInfo()
        user.then((result) => {
            this.setState({user: result})
        })

      }

    render() {
        return (
            <Container>
            <Profile 
                username={this.state.user ? this.state.user.username : "Loading.."}
                email={this.state.user ? this.state.user.attributes.email : "Loading.."}
                phone={this.state.user ? this.state.user.attributes.phone_number : "Loading.."}
            />
            </Container>
        )
    }
}

const Profile = (props) => (
        <div>
                <Row>
                <Col sm={{ span: 4, offset: 1}}>
                    <AccountInfo 
                        username={props.username}
                        email={props.email}
                        phone={props.phone}
                    />
                    </Col>
                        <MatchHistory/>
                    <Col sm= {{ span: 8}}>
                    </Col>
                </Row>
        </div>
    )

const AccountInfo = (props) => (
    <div>
                    
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/250px-ChessSet.jpg' thumbnail fluid />
                        <ListGroup>
                            <ListGroupItem variant="flush">{props.username}</ListGroupItem>
                            <ListGroupItem>{props.email}</ListGroupItem>
                            <ListGroupItem>{props.phone}</ListGroupItem>
                        </ListGroup>    
    </div>
)

const MatchHistory = (props) => (
    <div>
        <h2>Match History</h2>
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Variant</td>
                    <td>Opponent</td>
                    <td>Outcome</td>
                    <td>end FEN</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>AntiChess</td>
                    <td>Magnus</td>
                    <td>Win</td>
                    <td>FEN here</td>
                </tr>
            </tbody>
        </Table>
    </div>
)