import { IMovie } from "@/src/types/IMovie";
export interface IMovies {
  docs: IMovie[];
}

export interface IMoviesSearchResult {
  docs: [
    {
      id: number
      name: string
      alternativeName: string
      enName: string
      names: string[]
      type: string
      year: number
      description: string
      shortDescription: string
      logo: string
      poster: string
      backdrop: string
      rating: number
      votes: number
      movieLength: number
      genres: string[]
      countries: string[]
      releaseYears: number[]
    }
  ];
}
