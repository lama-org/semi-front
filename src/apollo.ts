import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const stringToBoolean = (value: string) => value === 'true';

const darkModeKey = 'semi-dark-mode';

export const darkModeVar = makeVar(stringToBoolean(localStorage.getItem(darkModeKey) || ''));

export const toggleDarkMode = (): void => {
  const darkMode = stringToBoolean(localStorage.getItem(darkModeKey) || '');
  darkModeVar(!darkMode);
  localStorage.setItem(darkModeKey, `${!darkMode}`);
};

export const client = new ApolloClient({
  uri: 'https://semi-backend.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
