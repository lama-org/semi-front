/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TvListQuery
// ====================================================

export interface TvListQuery_popular_results {
  __typename: "TV";
  id: string | null;
  backdrop_path: string | null;
}

export interface TvListQuery_popular {
  __typename: "TVResult";
  results: (TvListQuery_popular_results | null)[] | null;
}

export interface TvListQuery_topRate_results {
  __typename: "TV";
  id: string | null;
  backdrop_path: string | null;
}

export interface TvListQuery_topRate {
  __typename: "TVResult";
  results: (TvListQuery_topRate_results | null)[] | null;
}

export interface TvListQuery_airingToday_results {
  __typename: "TV";
  id: string | null;
  backdrop_path: string | null;
}

export interface TvListQuery_airingToday {
  __typename: "TVResult";
  results: (TvListQuery_airingToday_results | null)[] | null;
}

export interface TvListQuery {
  popular: TvListQuery_popular | null;
  topRate: TvListQuery_topRate | null;
  airingToday: TvListQuery_airingToday | null;
}
