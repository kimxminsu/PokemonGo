import React from 'react';
import {Update, Support} from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/Update">
            <Update />
          </Route>
          <Route path="/Support">
            <Support />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
