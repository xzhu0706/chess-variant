import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Account from './pages/Account';
import Variants from './pages/VariantIndex';
import AnalysisBoard from './pages/AnalysisBoard';
import AnalysisBoardReal from './pages/AnalysisBoardReal';
import './App.css';
import NavBar from './components/NavBar';

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
          <Route path="/account" component={Account} />
          <Route path="/create" component={AnalysisBoard} />
          <Route path="/analysis" component={AnalysisBoardReal} />
        </Switch>
      </Router>
    );
  }
}

export default App;
