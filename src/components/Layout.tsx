import styled from 'styled-components';
import Header from './Header';
import { FunctionComponent } from 'react';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const MainContent = styled.div`
  width: 100%;
`;

const Layout: FunctionComponent = ({ children }) => (
  <Container>
    <Header />
    <MainContent>{children}</MainContent>
  </Container>
);

export default Layout;
