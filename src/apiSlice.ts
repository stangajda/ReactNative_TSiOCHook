import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MOVIE_API_CONFIG} from './config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: MOVIE_API_CONFIG.baseUrl}),
  tagTypes: ['Movie'],
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => MOVIE_API_CONFIG.trendingUrl(),
      providesTags: ['Movie'],
    }),
  }),
});

export const {useGetMoviesQuery} = apiSlice;
