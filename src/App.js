import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import VariantDocumentation from './pages/VariantDocumentation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game/:token" component={Game} />
          <Route path="/variants" component={VariantDocumentation} />
        </Switch>
      </Router>
    );
  }
}

export default App;
