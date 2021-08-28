import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: absolute;
  z-index: 9;
  width: 100%;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  font-weight: 600;
  text-transform: uppercase;
`;
const Item = styled.li`
  margin-right: 30px;
  color: ${(props) => (props.selected ? '#c52525' : 'white')};
`;
const Logo = styled.li`
  margin-right: 30px;
  font-size: 30px;
  color: #e6a94c;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Logo>SEMI</Logo>
      <Item selected={pathname === '/'}>
        <Link to="/">홈</Link>
      </Item>
      <Item selected={pathname === '/movie'}>
        <Link to="/movie">영화</Link>
      </Item>
      <Item selected={pathname === '/tv'}>
        <Link to="/tv">TV</Link>
      </Item>
    </List>
    <div>검색영역 들어갈 자리</div>
  </Header>
));
