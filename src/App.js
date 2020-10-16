import React from 'react';
import {Main,Play,Update,Support} from './pages';
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
        <Route path="/Update">
          <Update />
        </Route>
        <Route path="/Play">
          <Play />
        </Route>
        <Route path="/Support">
          <Support />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>




  );
}