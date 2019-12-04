import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Account from './pages/Account';
import Variants from './pages/Variants';
import Create from './pages/Create';
import Analysis from './pages/Analysis';
import Pieces from './pages/Pieces';
import './App.css';
import NavBar from './components/NavBar';
import AdminDashboard from './pages/AdminDashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game/:id" component={Game} />
          <Route path="/variants" component={Variants} />
          <Route path="/account/:username" component={Account} />
          <Route path="/create" component={Create} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/pieces" component={Pieces} />
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
