import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch }
  from 'react-router-dom';
import Home from "./views/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <h1>
            hello all people
          </h1>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
