import React from 'react';
import Router from './AppRouter';
import GlobalStyles from './GlobalStyles';

function App(): JSX.Element {
  return (
    <div>
      <Router />
      <GlobalStyles />
    </div>
  );
}
export default App;
