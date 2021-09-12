/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MovieQuery
// ====================================================

export interface MovieQuery_popular_results {
  __typename: "Movie";
  id: number | null;
  title: string | null;
  vote_average: number | null;
}

export interface MovieQuery_popular {
  __typename: "MovieResult";
  page: number;
  results: (MovieQuery_popular_results | null)[] | null;
  total_pages: number;
  total_results: number;
}

export interface MovieQuery_upcoming_results {
  __typename: "Movie";
  id: number | null;
  title: string | null;
  vote_average: number | null;
}

export interface MovieQuery_upcoming {
  __typename: "MovieResult";
  page: number;
  results: (MovieQuery_upcoming_results | null)[] | null;
  total_pages: number;
  total_results: number;
}

export interface MovieQuery {
  popular: MovieQuery_popular | null;
  upcoming: MovieQuery_upcoming | null;
}
