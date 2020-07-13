import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom'
import routes from './router'

function RouteWithSubRoutes(route) {
  const routes = route.routes
  console.log(route)
  console.log(routes)
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router>
        <Switch >
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
