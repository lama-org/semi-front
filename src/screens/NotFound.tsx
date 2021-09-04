import PageTitle from '../components/PageTitle';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #b6b6b6;
`;

const NotFound = (): JSX.Element => {
  return (
    <Container>
      <PageTitle title="404" />
      <Title>404 Not Found.</Title>
    </Container>
  );
};

export default NotFound;
