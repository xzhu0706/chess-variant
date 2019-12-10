import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Account from './pages/Account';
import Variants from './pages/Variants';
import Create from './pages/Create';
import Tutorial from './pages/Tutorial';
import Analysis from './pages/Analysis';
import DiscussionBoard from './pages/DiscussionBoard';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Pieces from './pages/Pieces';
import './App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import AdminDashboard from './pages/AdminDashboard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router style={{background: 'blue'}}>
        <NavBar />
        <hr style={{height: '2px', backgroundColor: 'blue'}}/>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={DiscussionBoard} />
          <Route path="/game/:id" component={Game} />
          <Route path="/variants" component={Variants} />
          <Route path="/home" component={Home} />
          <Route
            path="/account/:username"
            render={(props) => (
              <Account key={props.match.params.username} {...props} />
            )}
          />
          <Route path="/create" component={Create} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/pieces" component={Pieces} />
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
