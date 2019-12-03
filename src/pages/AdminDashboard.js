import React, { Component } from 'react';
import Amplify, { Auth, API } from 'aws-amplify';
import awsconfig from '../aws-exports';


Amplify.configure(awsconfig);

// async function addToGroup() {
//   let apiName = 'AdminQueries';
//   let path = '/addUserToGroup';
//   let myInit = {
//       body: {
//         "username" : "richard",
//         "groupname": "Editors"
//       }, 
//       headers: {
//         'Content-Type' : 'application/json',
//         Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
//       } 
//   }
//   return await API.post(apiName, path, myInit);
// }


// let nextToken;

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.nextToken = '';
  }

  async componentDidMount() {
    const users = await this.listUsers(10);
    console.log(users)
  }

  async listUsers(limit, filter = '', attributes = '') {
    try {
      const apiName = 'AdminQueries';
      const path = '/listUsers';
      const myInit = {
        queryStringParameters: {
          AttributesToGet: attributes,
          Filter: filter,
          Limit: limit,
          PaginationToken: this.nextToken,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
        },
      };
      const { NextToken, ...rest } = await API.get(apiName, path, myInit);
      this.nextToken = NextToken;
      console.log(this.nextToken, rest);
      return rest;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

// export default withAuthenticator(App, true);
export default AdminDashboard;
