import React, { Component } from 'react'
import Amplify, {Auth} from 'aws-amplify'

export default class Account extends Component {

    async componentDidMount() {
        const user = await Auth.currentUserInfo();
        if (user) {
          this.setState({
            user: user,
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
            <div>
                Account Page
            </div>
        )
    }
}

