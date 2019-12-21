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
import UserVariant from './pages/UserVariant';
import Pieces from './pages/Pieces';
import './App.css';
import NavBar from './components/NavBar';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import { NAVBAR_COLLAPSE_BREAKPOINT } from './Constants/NavbarConstants';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: window.innerWidth < NAVBAR_COLLAPSE_BREAKPOINT,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setCollapseState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setCollapseState);
  }

  setCollapseState = (e) => {
    const width = e.target.outerWidth;
    if (width < NAVBAR_COLLAPSE_BREAKPOINT) this.setState({ collapsed: true });
    else this.setState({ collapsed: false });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <NavBar onNavbarToggle={this.onNavbarToggle} />
        <Switch>
          <Route path="/" exact render={(routeProps) => <Home {...routeProps} collapsed={collapsed} />} />
          <Route path="/game/:id" component={Game} />
          <Route path="/variants" component={Variants} />
          <Route path="/home" component={Home} />
          <Route path="/discuss" render={() => <DiscussionBoard marginLeft="20%" width="60%" />} />
          <Route
            path="/account/:username"
            render={(props) => (
              <Account key={props.match.params.username} {...props} />
            )}
          />
          <Route
            path="/pages/:vid"
            render={(props) => <UserVariant {...props} />}
          />
          <Route path="/create" component={Create} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/pieces" component={Pieces} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
