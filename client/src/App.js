// src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DummyPage from './components/DummyPage';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/dummy" component={DummyPage} />
      </Switch>
    </div>
  );
}

export default App;
