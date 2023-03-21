import { IBaseQuery } from './../types/IQuery';
import { IMovie } from './../types/IMovie';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_KEY="B5ZN11S-1KKMYB3-NMKKNHY-5VWEB7F"

export const netflixApi = createApi({
  reducerPath: "netflixApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1/",
  }),
  endpoints: (builder) => ({
    getRandomMovie: builder.query<IMovie, void>({
      query: () => `movie/random?token=${API_KEY}`
    })
  }) 
})

export const { useGetRandomMovieQuery } = netflixApi