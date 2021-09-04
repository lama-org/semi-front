import React from 'react';
import Router from './AppRouter';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { client, darkModeVar } from '../apollo';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../styles';

function App(): JSX.Element {
  const isDarkMode = useReactiveVar(darkModeVar);

  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}
export default App;
