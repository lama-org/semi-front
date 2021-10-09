/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MovieListQuery
// ====================================================

export interface MovieListQuery_popular_results {
  __typename: "Movie";
  id: number | null;
  backdrop_path: string | null;
}

export interface MovieListQuery_popular {
  __typename: "MovieResult";
  results: (MovieListQuery_popular_results | null)[] | null;
}

export interface MovieListQuery_upcoming_results {
  __typename: "Movie";
  id: number | null;
  backdrop_path: string | null;
}

export interface MovieListQuery_upcoming {
  __typename: "MovieResult";
  results: (MovieListQuery_upcoming_results | null)[] | null;
}

export interface MovieListQuery_nowPlaying_results {
  __typename: "Movie";
  id: number | null;
  backdrop_path: string | null;
}

export interface MovieListQuery_nowPlaying {
  __typename: "MovieResult";
  results: (MovieListQuery_nowPlaying_results | null)[] | null;
}

export interface MovieListQuery_topRated_results {
  __typename: "Movie";
  id: number | null;
  backdrop_path: string | null;
}

export interface MovieListQuery_topRated {
  __typename: "MovieResult";
  results: (MovieListQuery_topRated_results | null)[] | null;
}

export interface MovieListQuery {
  popular: MovieListQuery_popular | null;
  upcoming: MovieListQuery_upcoming | null;
  nowPlaying: MovieListQuery_nowPlaying | null;
  topRated: MovieListQuery_topRated | null;
}
