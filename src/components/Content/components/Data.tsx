import { IMovies } from "@/src/types/IMovies";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import Loader from "../../assets/Loader";

interface DataProps {
  data: IMovies | undefined
  isFetching: boolean
  isLoading: boolean
}

const Data: FC<DataProps> = ({ data, isFetching, isLoading }) => {
  const router = useRouter()

  if (isLoading || isFetching) {
    return <Loader />
  }

  if (data?.docs.length === 0) {
    return <h1 className="text-white text-xl text-center mt-10 md:text-3xl font-bold">Фильмов по такому запросу не найдено!</h1>
  }

  return (
    <div className="flex flex-wrap flex-row gap-6 md:gap-4 justify-center sm:justify-between items-start">
      {data?.docs.map((film) => {
        return (
          <div
            key={film.id}
            className="w-[133px] md:w-[149px] flex flex-col cursor-pointer md:hover:scale-110 transition group"
            onClick={() => {
              if (film.type === "movie") {
                router.push("movies/" + film.id)
              } else if (film.type === "anime") {
                router.push("anime/" + film.id)
              } else if ( film.type === "cartoon") {
                router.push("cartoons/" + film.id)
              }
            }}
          >
            <div className="h-[200px] md:h-[224px] w-auto object-cover rounded-md overflow-hidden">
              <Image
                src={film?.poster?.url}
                alt={film?.name}
                width={149}
                height={224}
              />
            </div>
            <div className="text-white line-clamp-2 text-lg font-semibold group-hover:text-zinc-400 transition">{film.name}</div>
            <div className="flex flex-row flex-wrap gap-1">
              {film.genres.slice(0, 2).map((genre, idx) => (
                <span key={idx} className="text-gray-500 break-words text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
