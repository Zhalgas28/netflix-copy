import { IMovies } from "@/src/types/IMovies";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

const Data: FC<{ data: IMovies | undefined }> = ({ data }) => {
  const router = useRouter()
  return (
    <div className="flex flex-wrap flex-row gap-5 justify-center items-start">
      {data?.docs.map((film) => {
        return (
          <div
            key={film.id}
            className="w-[149.4px] flex flex-col cursor-pointer"
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
            <div className="h-56 w-auto object-cover rounded-md overflow-hidden">
              <Image
                src={film?.poster?.url}
                alt={film?.name}
                width={149}
                height={224}
              />
            </div>
            <div className="text-white line-clamp-2 text-lg">{film.name}</div>
            <div className="flex flex-row flex-wrap gap-1">
              {film.genres.map((genre, idx) => (
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
