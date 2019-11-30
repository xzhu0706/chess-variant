import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Variants.css'
import AntiChess from '../components/variants/AntiChess';
import GridChess from '../components/variants/GridChess';
import ExtinctionChess from '../components/variants/ExtinctionChess';

const Variants = () => {
  return (
    <Router>
      <div>
        <h1>Variant Index</h1>
        <ul>
          <li>
            <Link to="/variants/antichess">Antichess</Link>
          </li>
          <li>
            <Link to="/variants/extinction">Extinction chess</Link>
          </li>
          <li>
            <Link to="/variants/grid">Grid chess</Link>
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
    </Router>
  );
}

export default Variants;