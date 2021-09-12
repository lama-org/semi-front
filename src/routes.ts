import Main from './screens/Main';
import { RouteProps } from 'react-router';
import Example from './screens/Example';

export default {
  home: {
    path: '/',
    component: Main,
    exact: true,
  },
  example: {
    path: '/example',
    component: Example,
  },
} as SemiRoute<RouteProps>;

interface SemiRoute<RouteT> {
  [key: string]: RouteT;
  home: RouteT;
  example: RouteT;
}
