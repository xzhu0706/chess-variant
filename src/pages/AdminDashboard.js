import React, { Component } from 'react';
import Amplify, { Auth, API } from 'aws-amplify';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MaterialTable from 'material-table';
import Chip from '@material-ui/core/Chip';
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

const apiName = 'AdminQueries';
const userColumns = [
  { title: 'Actions', field: 'actions' },
  { title: '', field: 'admin' },
  { title: 'ID', field: 'sub' },
  { title: 'Username', field: 'username' },
  { title: 'Enabled', field: 'enabled' },
  { title: 'UserStatus', field: 'userStatus' },
  { title: 'Created Date', field: 'userCreateDate' },
  { title: 'Email', field: 'email' },
  { title: 'Email Verified', field: 'email_verified' },
  { title: 'Phone Number', field: 'phone_number' },
  { title: 'Phone Number Verified', field: 'phone_number_verified' },
];

const adminTag = (
  <Chip variant="outlined" color="primary" label="Admin" />
);

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `admin-tab-${index}`,
    'aria-controls': `admin-tabpanel-${index}`,
  };
}

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      tabIndex: 0,
    };
    this.nextToken = '';
    this.nextTokenAdmin = '';
    this.adminUsers = [];
    this.listUsersLimit = 60;
  }

  async componentDidMount() {
    const users = await this.listUsers(this.listUsersLimit);
    const admins = await this.listAdmins(60);
    admins.Users.forEach((admin) => {
      this.adminUsers.push(admin.Username);
    });
    const userRows = this.generateUserRows(users.Users);
    console.log(users.Users, admins);
    this.setState({
      users: userRows,
    }, () => console.log(this.state));
  }

  handleChangeTabIndex = (e, newVal) => {
    this.setState({
      tabIndex: newVal,
    });
  }

  generateUserRows = (users) => {
    const rows = users.map((user) => {
      const userInfo = {};
      userInfo.username = user.Username;
      userInfo.userStatus = user.UserStatus;
      userInfo.userCreateDate = user.UserCreateDate;
      userInfo.enabled = user.Enabled ? 'true' : 'false';
      user.Attributes.forEach((attr) => {
        userInfo[attr.Name] = attr.Value;
      });
      if (this.adminUsers.includes(userInfo.username)) {
        userInfo.admin = adminTag;
      }
      return userInfo;
    });
    return rows;
  }

  listUsers = async (limit, filter = '', attributes = '') => {
    try {
      const path = '/listUsers';
      const myInit = {
        queryStringParameters: {
          attributesToGet: attributes,
          filter,
          limit,
          nextToken: this.nextToken,
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

  listAdmins = async (limit = 60) => {
    try {
      const path = '/listUsersInGroup';
      const myInit = {
        queryStringParameters: {
          groupname: 'Admin',
          limit,
          nextToken: this.nextTokenAdmin,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
        },
      };
      const { NextToken, ...rest } = await API.get(apiName, path, myInit);
      this.nextTokenAdmin = NextToken;
      return rest;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  handleJumpPage = async () => {
    if (this.nextToken) {
      // fetch more and push to users array
      const moreUsers = await this.listUsers(this.listUsersLimit);
      const moreUserRows = this.generateUserRows(moreUsers.Users);
      this.setState((prevState) => ({
        users: [...prevState.users, ...moreUserRows],
      }));
    }
  }

  render() {
    const { users, tabIndex } = this.state;
    return (
      <div>
        <Tabs
          value={tabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChangeTabIndex}
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Complaints" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          <MaterialTable
            columns={userColumns}
            data={users}
            title="Users"
            maxWidth="md"
            options={{
              pageSize: 10,
              pageSizeOptions: [10, 20, 30, 50],
              showFirstLastPageButtons: false,
            }}
            onChangePage={this.handleJumpPage}
          />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          Complaints
        </TabPanel>
      </div>
    );
  }
}

export default AdminDashboard;
