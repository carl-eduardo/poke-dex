import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:pokemon" component={Details} />
    </Switch>
  );
}
