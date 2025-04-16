/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MoviePageQuery
// ====================================================

export interface MoviePageQuery_popular_results {
  __typename: "Movie";
  id: number | null;
  title: string | null;
  vote_average: number | null;
  poster_path: string | null;
  overview: string | null;
}

export interface MoviePageQuery_popular {
  __typename: "MovieResult";
  page: number;
  results: (MoviePageQuery_popular_results | null)[] | null;
  total_pages: number;
  total_results: number;
}

export interface MoviePageQuery_upcoming_results {
  __typename: "Movie";
  id: number | null;
  title: string | null;
  vote_average: number | null;
  poster_path: string | null;
  overview: string | null;
}

export interface MoviePageQuery_upcoming {
  __typename: "MovieResult";
  page: number;
  results: (MoviePageQuery_upcoming_results | null)[] | null;
  total_pages: number;
  total_results: number;
}

export interface MoviePageQuery {
  popular: MoviePageQuery_popular | null;
  upcoming: MoviePageQuery_upcoming | null;
}
