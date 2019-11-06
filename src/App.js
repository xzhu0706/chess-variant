import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header'
import Home from './pages/Home';
import Game from './pages/Game';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game/:token" component={Game} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
