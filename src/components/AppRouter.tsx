import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Main from '../screens/Main';

const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Main} />
    </Router>
  );
};

export default AppRouter;
