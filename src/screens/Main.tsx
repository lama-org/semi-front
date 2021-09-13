import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
import { MovieQuery } from '../@types/__generated__/MovieQuery';
import { TvQuery } from '../@types/__generated__/TvQuery';
import { gql, useQuery } from '@apollo/client';

const movieListQuery = gql`
  query MovieListQuery {
    popular: moviePopular {
      results {
        id
        backdrop_path
      }
    }
    upcoming {
      results {
        id
        backdrop_path
      }
    }
    nowPlaying: now_playing {
      results {
        id
        backdrop_path
      }
    }
    topRated: top_rated {
      results {
        id
        backdrop_path
      }
    }
  }
`;
const tvListQuery = gql`
  query TvListQuery {
    popular {
      results {
        id
        backdrop_path
      }
    }
    topRate: top_rate {
      results {
        id
        backdrop_path
      }
    }
    airingToday: airing_today {
      results {
        id
        backdrop_path
      }
    }
  }
`;

SwiperCore.use([Navigation]);

const Container = styled.div`
  width: 100%;
`;
const MainContainer = styled.div`
  height: 700px;
`;

const SubContainer = styled.div`
  width: 95%;
  margin: 100px auto;
  z-index: 5;
  position: relative;
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
`;

const SubTitle = styled.h2`
  color: white;
  font-size: 25px;
  margin: 20px 20px 20px 0;
`;

const Main = (): JSX.Element => {
  const movie = useQuery<MovieQuery>(movieListQuery);
  const tv = useQuery<TvQuery>(tvListQuery);

  return (
    <>
      {movie.loading && tv.loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <Container>
          <MainContainer>
            <Swiper navigation={true} loop={true}>
              {movie.data?.popular &&
                movie.data.popular.results?.slice(0, 5).map((i, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <Poster src={`https://image.tmdb.org/t/p/w500/${i?.backdrop_path}`} alt="" />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </MainContainer>
          <SubContainer>
            <SubTitle>평점 높은 영화</SubTitle>
            <Swiper loop={true} spaceBetween={10} slidesPerView={6}>
              {movie.data?.topRated &&
                movie.data.topRated.results
                  ?.filter((n) => !!n?.backdrop_path)
                  .map((i, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <Poster src={`https://image.tmdb.org/t/p/w500/${i?.backdrop_path}`} alt="" />
                      </SwiperSlide>
                    );
                  })}
            </Swiper>
          </SubContainer>
          <SubContainer>
            <SubTitle>현재 상영영화</SubTitle>
            <Swiper loop={true} spaceBetween={10} slidesPerView={6}>
              {movie.data?.nowPlaying &&
                movie.data.nowPlaying.results
                  ?.filter((n) => !!n?.backdrop_path)
                  .map((i, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <Poster src={`https://image.tmdb.org/t/p/w500/${i?.backdrop_path}`} alt="" />
                      </SwiperSlide>
                    );
                  })}
            </Swiper>
          </SubContainer>
          <SubContainer>
            <SubTitle>상영 예정 영화</SubTitle>
            <Swiper loop={true} spaceBetween={10} slidesPerView={6}>
              {movie.data?.upcoming &&
                movie.data.upcoming.results?.map((i, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <Poster src={`https://image.tmdb.org/t/p/w500/${i?.backdrop_path}`} alt="" />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </SubContainer>
          <SubContainer>
            <SubTitle>인기 TV 프로그램</SubTitle>
            <Swiper loop={true} spaceBetween={10} slidesPerView={6}>
              {tv.data?.popular &&
                tv.data.popular.results
                  ?.filter((n) => !!n?.backdrop_path)
                  .map((i, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <Poster src={`https://image.tmdb.org/t/p/w500/${i?.backdrop_path}`} alt="" />
                      </SwiperSlide>
                    );
                  })}
            </Swiper>
          </SubContainer>
          <SubContainer>
            <SubTitle>현재 상영 TV 프로그램</SubTitle>
            <Swiper loop={true} spaceBetween={10} slidesPerView={6}>
              {tv.data?.airingToday &&
                tv.data.airingToday.results
                  ?.filter((n) => !!n?.backdrop_path)
                  .map((i, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <Poster src={`https://image.tmdb.org/t/p/w500/${i?.backdrop_path}`} alt="" />
                      </SwiperSlide>
                    );
                  })}
            </Swiper>
          </SubContainer>
          <SubContainer>
            <SubTitle>평점 높은 TV 프로그램</SubTitle>
            <Swiper loop={true} spaceBetween={10} slidesPerView={6}>
              {tv.data?.topRate &&
                tv.data.topRate.results
                  ?.filter((n) => !!n?.backdrop_path)
                  .map((i, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <Poster src={`https://image.tmdb.org/t/p/w500/${i?.backdrop_path}`} alt="" />
                      </SwiperSlide>
                    );
                  })}
            </Swiper>
          </SubContainer>
        </Container>
      )}
    </>
  );
};

export default Main;
