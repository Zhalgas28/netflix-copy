import { IBaseQuery, IQuery } from "./../types/IQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovies } from "../types/IMovies";
import { IMovie } from "../types/IMovie";

const TOKEN = "B5ZN11S-1KKMYB3-NMKKNHY-5VWEB7F";

export const netflixApi = createApi({
  reducerPath: "netflixApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1/",
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<IMovies, IQuery>({
      query: ({ limit, page, type, filters }) => {
        const genre = filters.genre !== "" ? `genres.name=${filters.genre}&`: ""
        return {
          url: `movie?${genre}limit=${limit}&page=${page}&type=${type}&rating.imdb=${filters.rating}&year=${filters.year}&name=!null&poster.url=!null&token=${TOKEN}`,
        };
      },
    }),
    getFilm: builder.query<IMovie, IBaseQuery>({
      query: ({ id }) => {
        if (!id) {
          return ""
        }
        return {
          url: `movie/${id}?token=${TOKEN}`
        }
      }
    })
  }),
});

export const { useGetFilmsQuery, useGetFilmQuery } = netflixApi;
