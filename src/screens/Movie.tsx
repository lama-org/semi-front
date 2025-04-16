import { FunctionComponent } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import starImg from '../img/star_rate.png';
import FavouriteComponent from '../components/AddFavourite';
import { MoviePageQuery } from '../@types/__generated__/MoviePageQuery';
import ReactTooltip from 'react-tooltip';

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
  width: 5%;
`;

const RightPart = styled.div`
  float: right;
  width: 95%;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1vh;
  justify-content: center;
  position: relative;
  transition: transform 0.5s;
`;

const MovieBox = styled.div`
  text-align: center;
  padding: 22px;
  position: relative;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 9999;
  }

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .movieTitle {
    display: block;
    top: 2px;
    right: 24px;
    width: -10px;
    -webkit-text-stroke: 1px white;
    color: black !important;
  }

  &:hover .voteAverage {
    display: block;
    top: 1px;
  }
`;

const MoviePoster = styled.img`
  width: 310px;
  height: 100%;
`;

const MovieTitle = styled.div`
  position: absolute;
  font-size: 15px;
  display: none;
`;

const MovieVoteAverage = styled.p`
  position: absolute;
  font-size: 15px;
  display: none;
  vertical-align: middle;
  -webkit-text-stroke: 1px white;
  color: black !important;
`;

const VoteAverage = styled.label`
  top: 3px;
`;

const StarIcon = styled.i`
  font-size: 15px;
  color: goldenrod;
  padding-right: 2px;
`;

const StarIconImg = styled.img`
  width: 11px;
`;

const FavDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
`;

const FavUl = styled.ul`
  list-style: none;
  text-align: -webkit-center;
`;

const FavLi = styled.li`
  margin: 20px 0;
`;

const FavImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 70%;
  object-fit: cover;
  &:hover {
    width: 70px;
    height: 70px;
    cursor: pointer;
    transform: scale(1.4);
    z-index: 9999;
  }
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

const movies = [
  { url: 'https://t1.daumcdn.net/cfile/tistory/231235395466C11011?original', title: 'Interstellar' },
  {
    url: 'http://img.lifestyler.co.kr/uploads/program/seditor/2021/08/f637656764822846028.jpeg',
    title: 'i am a babo',
  },
  {
    url: 'http://img.lifestyler.co.kr/uploads/program/seditor/2021/07/f637632472041903770.jpeg',
    title: 'hi! iam a doctor',
  },
];

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
                {movies.map((movie) => {
                  return (
                    <FavLi className="favLiTag">
                      <FavDiv key={`poster_${movie.url}`}>
                        <a data-for="main" data-tip={movie.title} data-iscapture="true">
                          <FavImg src={movie.url} alt="" />
                        </a>
                        <ReactTooltip id="main" place="right" type="dark" effect="float" multiline={true} />
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
                        <VoteAverage>{upcoming?.vote_average}</VoteAverage>
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
