/* eslint react/jsx-props-no-spreading: off */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';

// Lazily load routes and code split with webpack
const LazyCounterPage = React.lazy(
  () => import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
);

const LazyMathPage1 = React.lazy(
  () => import(/* webpackChunkName: "MathPage1" */ './containers/MathAjx1')
);

const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

const MathPage1 = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyMathPage1 {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.HOME} component={HomePage} />
        <Route path={routes.MATHAJX1} component={MathPage1} />
      </Switch>
    </App>
  );
}
