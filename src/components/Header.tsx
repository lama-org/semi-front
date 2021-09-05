import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

const Header = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 50px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  font-weight: 600;
  text-transform: uppercase;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 30px;
  color: ${(props) => (props.selected ? '#c52525' : props.theme.color)};
`;
const Logo = styled.li`
  margin-right: 30px;
  font-size: 30px;
  color: #e6a94c;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
    <OptionContainer>
      <ToggleButton />
      <div>검색자리</div>
    </OptionContainer>
  </Header>
));
