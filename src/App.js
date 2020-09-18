import React from 'react';
import Play from './pages';

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
      </Switch>
    </Router>
  );
}

