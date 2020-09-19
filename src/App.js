import React from 'react';
import {Play, Ranking} from './pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/play">
          <Play/>
        </Route>
        <Route path="/ranking">
          <Ranking/>
        </Route>
      </Switch>
    </Router>
  );
}

