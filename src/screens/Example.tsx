import { FunctionComponent } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { MovieQuery } from '../@types/__generated__/MovieQuery';

const Container = styled.div`
  padding: 50px 10px 0;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Content = styled.div`
  margin-bottom: 10px;
  padding-left: 20px;

  &:last-child {
    margin-bottom: 20px;
  }
`;

/*
  불러올 데이터 쿼리문 작성
  gql 태그로 작성된 쿼리문을 바탕으로
  yarn run "apollo generated" 실행시 자동으로 interface 들이 생성된다.

  [구문]
  query [Query Name: 생성되는 Interface 의 명과 동시에 전체적인 쿼리 이름을 지정] {
    [호출할 쿼리] {
      [반환되는 데이터들]
    }
  }

  일반적으로 반환된 데이터에는 호출된 쿼리의 이름으로 반환되게 됩니다.
  하지만 중복되거나 다른 네이밍을 지정하고 싶은경우
  [새로운 네임]: [호출할 쿼리] {
    [반환되는 데이터들]
  }
  로 지정해주면 됩니다.
*/
const movieQuery = gql`
  query MovieQuery {
    popular: moviePopular {
      page
      results {
        id
        title
        vote_average
      }
      total_pages
      total_results
    }
    upcoming {
      page
      results {
        id
        title
        vote_average
      }
      total_pages
      total_results
    }
  }
`;

const Example: FunctionComponent = () => {
  // useQuery, useMutation 을 이용하여 쿼리를 전송하면 됩니다. (저희 semi 프로젝트에는 query 문 밖에 없지만요)
  // query 와 mutation 의 사용법이 조금 다르지만 거의 대부분은 거의 같으니 해당 예문을 참고해 주세요
  // useQuery 에 생성된 타입 인터페이스를 넣어주고 파라미터로 위에서 생성한 gql 문을 넣어주시면 됩니다.
  // 초기화된 useQuery 는 객체를 반환하게 되는데 여기에는 유용한 많은 속성들이 들어있습니다.
  // 예시에는 통신 상태를 나타내는 loading 속성과 통신이 완료되어 반환된 데이터인 data 속성을 받아왔습니다.
  const { loading, data } = useQuery<MovieQuery>(movieQuery);

  return (
    <Container>
      {/* loading 중일 경우 반환*/}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {/* loading 이 끝났을 경우 반환*/}
          <div>
            <Title>Upcoming</Title>
            {data?.upcoming &&
              data.upcoming.results?.map((upcoming) => (
                <Content key={upcoming?.id}>
                  {upcoming?.title}: ({upcoming?.vote_average})
                </Content>
              ))}
          </div>
          <div>
            <Title>Popular</Title>
            {data?.popular &&
              data.popular.results?.map((upcoming) => (
                <Content key={upcoming?.id}>
                  {upcoming?.title}: ({upcoming?.vote_average})
                </Content>
              ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Example;
