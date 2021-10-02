import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { MovieDetailQuery } from '../@types/__generated__/MovieDetailQuery';
import { useParams } from 'react-router-dom';

const movieDetailQuery = gql`
  query MovieDetailQuery($id: Int!) {
    movie_detail(id: $id) {
      budget
      id
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Poster = styled.img`
  width: 100%;
  height: 700px;
`;

const MovieDetailContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: white;
  z-index: 2;
  text-align: center;
`;

interface typeMovieDetail {
  id: string;
}

const MovieDetail = () => {
  const { id } = useParams<typeMovieDetail>();
  const movieId = parseInt(id);
  console.log('movieId = ' + typeof movieId);
  const { loading, data } = useQuery(movieDetailQuery, {
    variables: { movieId },
  });
  console.log(data);
  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <MovieDetailContainer>
            <h2>항</h2>
          </MovieDetailContainer>
        </>
      )}
    </Container>
  );
};

export default MovieDetail;
