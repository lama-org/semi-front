import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../screens/NotFound';
import Layout from './Layout';
import routes from '../routes';

const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Layout>
        <Switch>
          {Object.keys(routes).map((route) => (
            <Route key={`route_${route}`} {...routes[route]} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
