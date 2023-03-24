import { IBaseQuery } from "./../types/IQuery";
import { IMovie } from "./../types/IMovie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovies } from "../types/IMovies";

const TOKEN = "B5ZN11S-1KKMYB3-NMKKNHY-5VWEB7F";

export const netflixApi = createApi({
  reducerPath: "netflixApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1/",
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<IMovies, IBaseQuery>({
      query: ({ limit, page, type }) => ({
        url: `movie?limit=${limit}&page=${page}&type=${type}&token=${TOKEN}`,
      }),
    }),
  }),
});

export const { useGetFilmsQuery } = netflixApi;
