/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TvQuery
// ====================================================

export interface TvQuery_popular_results {
  __typename: 'Tv';
  id: number | null;
  title: string | null;
  poster_path: string | null;
  vote_average: number | null;
  backdrop_path: string | null;
}

export interface TvQuery_popular {
  __typename: 'TvResult';
  page: number;
  results: (TvQuery_popular_results | null)[] | null;
  total_pages: number;
  total_results: number;
}

export interface TvQuery_airingToday_results {
  __typename: 'Tv';
  id: number | null;
  title: string | null;
  poster_path: string | null;
  vote_average: number | null;
  backdrop_path: string | null;
}

export interface TvQuery_airingToday {
  __typename: 'TvResult';
  page: number;
  results: (TvQuery_airingToday_results | null)[] | null;
  total_pages: number;
  total_results: number;
}

export interface TvQuery_topRated_results {
  __typename: 'Tv';
  id: number | null;
  title: string | null;
  poster_path: string | null;
  vote_average: number | null;
  backdrop_path: string | null;
}

export interface TvQuery_topRated {
  __typename: 'TvResult';
  page: number;
  results: (TvQuery_topRated_results | null)[] | null;
  total_pages: number;
  total_results: number;
}

export interface TvQuery {
  popular: TvQuery_popular | null;
  airingToday: TvQuery_airingToday | null;
  topRate: TvQuery_topRated | null;
}
