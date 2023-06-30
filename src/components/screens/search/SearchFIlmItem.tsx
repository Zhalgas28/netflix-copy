import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface IFilmItemProps {
  onClose: () => void
  film: {
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

}

const SearchFilmItem: FC<IFilmItemProps> = ({ film, onClose }) => {
  let href = ""
  switch (film.type) {
    case "movie":
      href = "movies/" + film.id
      break;
    case "anime":
      href = "anime/" + film.id
      break;
    case "cartoon":
      href = "cartoons/" + film.id
      break;
  }

  return (
    <Link onClick={onClose} href={href}>
      <div className="flex group items-center">
        <div className="w-[50px] h-[75px] mr-[15px] overflow-hidden rounded-md">
          <Image width={50} height={75} src={film.poster || ""} alt={film.name || ""} loading="eager" priority />
        </div>
        <div className="max-w-[80%]">
          <div className="mb-[6px] font-bold text-md group-hover:text-red-700 transition">
            {film.name ? film.name : film.enName}
          </div>
          <div className="flex items-center">
            <div className="text-zinc-400 text-md mr-2">{film.year}</div>
            <div className="bg-zinc-700 px-1 rounded color-white text-sm">{film.rating.toFixed(1)}</div>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default SearchFilmItem;