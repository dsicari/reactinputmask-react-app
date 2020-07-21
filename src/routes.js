import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Advisor from './pages/Advisor';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Advisor} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}