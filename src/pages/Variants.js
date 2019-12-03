import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './Variants.css';
import AntiChess from '../components/variants/AntiChess';
import GridChess from '../components/variants/GridChess';
import ExtinctionChess from '../components/variants/ExtinctionChess';

const Variants = () => (
  <Router>
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'inline-block', textAlign: 'left', margin: '1vw' }}>
        <h1>Index of Variants</h1>
        <ul>
          <li>
            <Link to="/variants/antichess">Antichess</Link>
          </li>
          <li>
            <Link to="/variants/extinction">Extinction Chess</Link>
          </li>
          <li>
            <Link to="/variants/grid">Grid Chess</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path="/variants/antichess">
            <AntiChess />
          </Route>
          <Route path="/variants/grid">
            <GridChess />
          </Route>
          <Route path="/variants/extinction">
            <ExtinctionChess />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default Variants;
