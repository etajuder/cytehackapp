import React from 'react';
import { Route, IndexRoute } from 'react-router';
import asyncComponent from '../components/AsyncComponent';
import App from '../components/App';

const LandingPage = asyncComponent(() => import('../components/LandingPage'));


export default (
  <Route>
    <Route path="/" component={App}>
       <IndexRoute component={LandingPage} />
    </Route>
  </Route>
);
