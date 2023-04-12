import { IMovie } from "@/src/types/IMovie";
import { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import SimilarMovies from "../SimilarMovies/SimilarMovies";

const Content: FC<{ film: IMovie | undefined }> = ({ film }) => {
  return (
    <div>
      <div className="flex flex-col justify-center sm:justify-start sm:flex-row gap-8">
        <div className="flex gap-2 flex-col justify-center">
          <div className="mr-12 w-[191.8px] rounded-md overflow-hidden mb-2">
            <img
              className="h-full w-full"
              src={film?.poster?.url}
              alt={film?.name}
            />
          </div>
          <div className="flex gap-2">
            <div className="text-white text-sm md:text-lg font-bold rounded-md px-2 py-1 bg-[#1f1f1f]">
              IMDB {film?.rating.kp}
            </div>
            <div className="text-white text-sm md:text-lg font-bold rounded-md px-2 py-1 bg-[#1f1f1f]">
              KP {film?.rating.imdb}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-white text-3xl sm:text-4xl mb-8">{film?.name}</h1>

          <div className="flex flex-col gap-4 items-start">
            <div className="flex gap-10">
              <span className="opacity-50 text-xl">Год:</span>
              <span className="text-white text-xl">{film?.year}</span>
            </div>
            <div className="flex gap-10">
              <span className="opacity-50 text-xl">Страна:</span>
              {film?.countries.map((country, idx) => {
                return (
                  <span className="text-white text-xl" key={idx}>
                    {country.name}
                  </span>
                );
              })}
            </div>
            <div className="flex gap-10">
              <span className="opacity-50 text-xl flex ">Жанр:</span>
              <div className="flex gap-x-4 flex-wrap">
                {film?.genres?.map((genre, idx) => {
                  return (
                    <span className="text-white text-xl" key={idx}>
                      {genre.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-10">
              <span className="opacity-50 text-xl">Возраст:</span>
              <span className="text-white text-xl">{film?.ageRating}+</span>
            </div>
            <a
              href={film?.videos.trailers[0].url}
              target="_blank"
              className="flex items-center cursor-pointer bg-red-700 py-2 px-4 rounded-lg hover:opacity-70 transition"
            >
              <BsFillPlayFill className="mr-1" />
              Play
            </a>
          </div>
        </div>
      </div>
      <p className="opacity-80 text-lg mt-10 max-w-[90%]">
        {film?.description}
      </p>
      <SimilarMovies film={film} />
    </div>
  );
};

export default Content;
