import { FunctionComponent } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import starImg from '../img/star_rate.png';
import FavouriteComponent from '../components/AddFavourite';
import { MoviePageQuery } from '../@types/__generated__/MoviePageQuery';

const Container = styled.div`
  padding: 50px 10px 0;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const LeftPart = styled.div`
  float: left;
  width: 10%;
`;

const RightPart = styled.div`
  float: right;
  width: 85%;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1vh;
  justify-content: left;
  position: relative;
  transition: transform 0.5s;
`;

const MovieBox = styled.div`
  width: 18%;
  text-align: center;
  padding: 1vh;
  position: relative;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    opacity: 0.5;
    z-index: 9999;
  }

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .movieTitle {
    display: block;
    top: 8px;
    right: 8px;
    width: 34px;
  }

  &:hover .voteAverage {
    display: block;
    top: 8px;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
`;

const MovieTitle = styled.div`
  position: absolute;
  font-size: 1.7vh;
  display: none;
`;

const MovieVoteAverage = styled.p`
  position: absolute;
  font-size: 1.7vh;
  display: none;
  vertical-align: middle;
`;

const StarIcon = styled.i`
  font-size: 1.75vh;
  color: goldenrod;
  padding-right: 2px;
`;

const StarIconImg = styled.img`
  width: 15px;
`;

const FavDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  overflow: hidden;
`;

const FavUl = styled.ul`
  list-style: none;
`;

const FavLi = styled.li`
  margin: 20px 0;
`;

const FavImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const movieQuery = gql`
  query MoviePageQuery {
    popular: moviePopular {
      page
      results {
        id
        title
        vote_average
        poster_path
        overview
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
        poster_path
        overview
      }
      total_pages
      total_results
    }
  }
`;

const Movie: FunctionComponent = () => {
  const { loading, data } = useQuery<MoviePageQuery>(movieQuery);

  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            <LeftPart>
              <FavUl>
                {[
                  'https://t1.daumcdn.net/cfile/tistory/231235395466C11011?original',
                  'http://img.lifestyler.co.kr/uploads/program/seditor/2021/08/f637656764822846028.jpeg',
                  'http://img.lifestyler.co.kr/uploads/program/seditor/2021/07/f637632472041903770.jpeg',
                ].map((i) => {
                  return (
                    <FavLi>
                      <FavDiv key={`poster_${i}`}>
                        <FavImg src={i} alt="" />
                      </FavDiv>
                    </FavLi>
                  );
                })}
              </FavUl>
            </LeftPart>
            <RightPart>
              <Title>Popular</Title>
              <MovieContainer>
                {data?.popular &&
                  data.popular.results?.map((upcoming) => (
                    <MovieBox key={upcoming?.id}>
                      <>
                        <MoviePoster src={'https://image.tmdb.org/t/p/w500/' + upcoming?.poster_path} alt="movie" />
                        <FavouriteComponent />
                      </>
                      <MovieTitle className="movieTitle">{upcoming?.title}</MovieTitle>
                      <MovieVoteAverage className="voteAverage">
                        <StarIcon>
                          <StarIconImg src={starImg} />
                        </StarIcon>
                        {upcoming?.vote_average}
                      </MovieVoteAverage>
                    </MovieBox>
                  ))}
              </MovieContainer>
            </RightPart>
          </div>
        </>
      )}
    </Container>
  );
};

export default Movie;
