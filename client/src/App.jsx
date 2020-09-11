import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Components/Containers/Home';

function AppTest() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppTest />
    </BrowserRouter>
  );
}

export default {
  AppTest, App,
};
