import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme: DefaultTheme = {
  accent: '#0095f6',
  borderColor: '#2c2c2c',
  bgColor: '#ffffff',
  color: '#151515',
};

export const darkTheme: DefaultTheme = {
  accent: '#0095f6',
  borderColor: '#DBDBDB',
  bgColor: '#2c2c2c',
  color: '#e1e1e1',
};

export const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing:border-box;
  }
  body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
  }
  h1 {
    font-size:32px;
    margin-bottom:30px;
  }
  .loading{
    position: fixed;
    width: 6rem;
    height: 6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
