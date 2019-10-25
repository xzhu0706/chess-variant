import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Game from './Pages/Game';
import './App.css';

class App extends Component {
    state = {
        
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/game/:token" component={Game}></Route>
                </Switch>
            </Router>
        );

    }
};

export default App;
