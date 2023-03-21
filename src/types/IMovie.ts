interface IRating {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface ILogo {
  url: "string";
}

interface IPoster {
  url: "string";
  previewUrl: "string";
}

interface ITrailer {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
}

interface ITeaser {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
}

interface IVideos {
  trailers: ITrailer[];
  teasers: ITeaser[];
}

interface IGenre {
  name: "string";
}

export interface IMovie {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  type: string;
  description: string;
  shortDescription: string;
  slogan: string;
  rating: IRating;
  ageRating: 16;
  logo: ILogo;
  poster: IPoster;
  videos: IVideos;
  genres: IGenre[];
}
