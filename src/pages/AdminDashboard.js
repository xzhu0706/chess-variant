/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import Amplify, { Auth, API } from 'aws-amplify';
// import { createUser } from '../graphql/mutations';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MaterialTable from 'material-table';
import Chip from '@material-ui/core/Chip';
import ToolTip from '@material-ui/core/Tooltip';
import PersonPin from '@material-ui/icons/PersonPin';
import { deleteComplaint, updateComplaint } from '../customGraphql/mutations';
import { listComplaints } from '../customGraphql/queries';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const apiName = 'AdminQueries';
const userColumns = [
  { title: '', field: 'admin' },
  { title: 'ID', field: 'sub' },
  { title: 'Username', field: 'username' },
  { title: 'Enabled', field: 'enableStatus' },
  { title: 'UserStatus', field: 'userStatus' },
  { title: 'Created Date', field: 'userCreateDate' },
  { title: 'Email', field: 'email' },
  { title: 'Email Verified', field: 'email_verified' },
  { title: 'Phone Number', field: 'phone_number' },
  { title: 'Phone Number Verified', field: 'phone_number_verified' },
  { title: '', field: 'enabled' },
];

const complaintColumns = [
  { title: 'Processed', field: 'processed', editable: 'never' },
  { title: 'Result', field: 'result' },
  // { title: 'ID', field: 'id', editable: 'never' },
  { title: 'Description', field: 'content', editable: 'never' },
  {
    title: 'Link',
    field: 'link',
    render: (rowData) => (rowData.link ? (
      <ToolTip title={rowData.link}>
        <a rel="noopener noreferrer" href={rowData.link} target="_blank">
          Link
        </a>
      </ToolTip>
    )
      : ''
    ),
    editable: 'never',
  },
  {
    title: 'User',
    field: 'user',
    render: (rowData) => (rowData.user && rowData.user.username ? (
      <Link to={`/account/${rowData.user.username}`}>
        {rowData.user.username}
      </Link>
    )
      : ''),
    editable: 'never',
  },
  {
    title: 'Reported User',
    field: 'reportedUser',
    render: (rowData) => (rowData.reportedUser && rowData.reportedUser.username ? (
      <Link to={`/account/${rowData.reportedUser.username}`}>
        {rowData.reportedUser.username}
      </Link>
    )
      : ''),
    editable: 'never',
  },
  { title: 'Created Date', field: 'createdAt', editable: 'never' },
  { title: 'Updated Date', field: 'updatedAt', editable: 'never' },
  {
    title: 'Processed By',
    field: 'proccesedBy',
    render: (rowData) => (rowData.processedBy && rowData.processedBy.username ? (
      <Link to={`/account/${rowData.processedBy.username}`}>
        {rowData.processedBy.username}
      </Link>
    )
      : ''),
    editable: 'never',
  },
];

const adminTag = (
  <Chip variant="outlined" color="primary" label="Admin" />
);
const activeTag = (
  <Chip color="secondary" label="Active" />
);
const inactiveTag = (
  <Chip label="Inactive" />
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
      complaints: [],
      tabIndex: 0,
    };
    this.nextToken = '';
    this.nextTokenAdmin = '';
    this.adminUsers = [];
    this.listUsersLimit = 60;
    this.updatedUserIndex = '';
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
    this.fetchComplaints();
  }

  fetchComplaints = async () => {
    const queryResult = await API.graphql({
      query: listComplaints,
      variables: { limit: 1000 },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    const complaints = queryResult.data.listComplaints.items;
    this.setState({
      complaints: this.generateComplaintRows(complaints),
    });
  }

  generateComplaintRows = (complaints) => {
    const rows = complaints.map((complaint) => {
      const complaintInfo = { ...complaint };
      complaintInfo.link = complaint.gameLink;
      complaintInfo.processed = complaintInfo.processed ? 'Yes' : 'No';
      return complaintInfo;
    });
    return rows;
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
      userInfo.enabled = user.Enabled;
      user.Attributes.forEach((attr) => {
        userInfo[attr.Name] = attr.Value;
      });
      userInfo.enableStatus = user.Enabled ? activeTag : inactiveTag;
      if (this.adminUsers.includes(userInfo.username)) {
        userInfo.admin = adminTag;
      } else {
        userInfo.admin = false;
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

  updateToAdminGroup = async (username, add = true) => {
    try {
      const path = add ? '/addUserToGroup' : '/removeUserFromGroup';
      const myInit = {
        body: {
          username,
          groupname: 'Admin',
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
        },
      };
      const result = await API.post(apiName, path, myInit);
      // if success, call listAdmins to get updated Admin group
      const admins = await this.listAdmins(60);
      this.adminUsers = [];
      admins.Users.forEach((admin) => {
        this.adminUsers.push(admin.Username);
      });
      this.retrieveUpdatedUser(username);
      return result.message;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  updateUserStatus = async (username, enable) => {
    try {
      const path = enable ? '/enableUser' : '/disableUser';
      const myInit = {
        body: {
          username,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
        },
      };
      const result = await API.post(apiName, path, myInit);
      this.retrieveUpdatedUser(username);
      return result.message;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  getUser = async (username) => {
    try {
      const path = '/getUser';
      const myInit = {
        queryStringParameters: {
          username,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
        },
      };
      const result = await API.get(apiName, path, myInit);
      return result;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  retrieveUpdatedUser = async (username) => {
    const updatedUser = await this.getUser(username);
    // clean up the returned result so that it can go through genreateUserRows function
    console.log('updated', updatedUser);
    updatedUser.Attributes = updatedUser.UserAttributes;
    const updatedUserRow = this.generateUserRows([updatedUser]);
    this.setState((prevState) => {
      const users = [...prevState.users];
      users.splice(this.updatedUserIndex, 1, updatedUserRow[0]);
      return { ...prevState, users };
    });
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

  handleUpdateAdmin = async (event, rowData) => {
    let result;
    if (rowData.admin) {
      if (window.confirm('Are you sure you wish to demote this admin user?')) {
        result = await this.updateToAdminGroup(rowData.username, false);
      }
    } else if (window.confirm('Are you sure you wish to promote this user to Admin?')) {
      result = await this.updateToAdminGroup(rowData.username, true);
    }
    const { users } = this.state;
    this.updatedUserIndex = users.indexOf(rowData);
    alert(result);
  }

  // addToUserTable = async (event, rowData) => {
  //   const userData = {};
  //   userData.id = rowData.sub;
  //   userData.username = rowData.username;
  //   userData.email = rowData.email;
  //   userData.phoneNumber = rowData.phone_number;
  //   const user = await Auth.currentCredentials();
  //   try {
  //     const res = await API.graphql({
  //       query: createUser,
  //       variables: { input: userData },
  //       authMode: 'AMAZON_COGNITO_USER_POOLS',
  //     });
  //     console.log(user, res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  handleUpdateUserStatus = async (event, rowData) => {
    let result;
    if (!rowData.enabled) {
      if (window.confirm('Are you sure you wish to enable this user?')) {
        result = await this.updateUserStatus(rowData.username, true);
      }
    } else if (window.confirm('Are you sure you wish to disable this user?')) {
      result = await this.updateUserStatus(rowData.username, false);
    }
    const { users } = this.state;
    this.updatedUserIndex = users.indexOf(rowData);
    alert(result);
  }

  handleDeleteComplaint = async (oldData) => {
    try {
      const deletedComplaint = await API.graphql({
        query: deleteComplaint,
        variables: {
          input: {
            id: oldData.id,
          },
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      if (deletedComplaint) {
        this.setState((prevState) => {
          const complaints = [...prevState.complaints];
          complaints.splice(oldData.tableData.id, 1);
          return { ...prevState, complaints };
        });
      }
    } catch (e) {
      console.log(e);
      alert('Something went wrong.');
    }
  }

  handleUpdateComplaint = async (newData, oldData) => {
    try {
      const admin = await Auth.currentUserInfo();
      const queryResult = await API.graphql({
        query: updateComplaint,
        variables: {
          input: {
            id: newData.id,
            processed: true,
            complaintProcessedById: admin.attributes.sub,
            result: newData.result,
          },
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      const updatedComplaint = queryResult.data.updateComplaint;
      if (updatedComplaint && updatedComplaint.result === newData.result) {
        newData.processedBy = updatedComplaint.processedBy;
        newData.processed = 'Yes';
        this.setState((prevState) => {
          const complaints = [...prevState.complaints];
          complaints.splice(oldData.tableData.id, 1, newData);
          return { ...prevState, complaints };
        });
      }
    } catch (e) {
      console.log(e);
      alert('Something went wrong.');
    }
  }

  render() {
    const { users, complaints, tabIndex } = this.state;
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
            actions={[
              (rowData) => ({
                icon: () => (
                  <PersonPin
                    color={
                      !rowData.admin
                        ? 'primary'
                        : 'secondary'
                    }
                  />
                ),
                tooltip: !rowData.admin ? 'Promote to Admin' : 'Demote the admin',
                onClick: this.handleUpdateAdmin,
              }),
              (rowData) => ({
                icon: rowData.enabled ? 'toggle_on' : 'toggle_off',
                tooltip: rowData.enabled ? 'Disable User' : 'Enable User',
                onClick: this.handleUpdateUserStatus,
              }),
            ]}
          />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <MaterialTable
            columns={complaintColumns}
            data={complaints}
            title="Complaints"
            maxWidth="md"
            options={{
              pageSize: 10,
              pageSizeOptions: [10, 20, 30, 50],
              showFirstLastPageButtons: false,
              cellStyle: { verticalAlign: 'top' },
            }}
            editable={{
              onRowUpdate: (newData, oldData) => new Promise((resolve) => {
                setTimeout(() => {
                  this.handleUpdateComplaint(newData, oldData);
                  resolve();
                }, 1000);
              }),
              onRowDelete: (oldData) => new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.handleDeleteComplaint(oldData);
                }, 1000);
              }),
            }}
            actions={[

            ]}
          />
        </TabPanel>
      </div>
    );
  }
}

export default AdminDashboard;
