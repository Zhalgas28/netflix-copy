import { useSearchFilmsQuery } from "@/src/services/netflixService";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface ISearchProps {
  visible: boolean;
}

const Search: FC<ISearchProps> = ({ visible }) => {
  const [search, setSearch] = useState<string>("");
  const { data } = useSearchFilmsQuery({ limit: 5, search: search }, {
    skip: search.length < 3
  })


  if (!visible) {
    return null;
  }

  return (
    <div className="bg-zinc-800 p-5 w-[250px] sm:w-[400px] rounded absolute top-10 right-[-100px] xs:right-[-40px]">
      <input
        className="bg-white px-2 py-1 text-black w-full focus:outline-none rounded-md"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col py-4 gap-3">
        {data?.docs.map((film) => {
          return <FilmItem film={film} key={film.id} />
        })}
      </div>
    </div>
  );
};

interface IFilmItemProps {
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

const FilmItem: FC<IFilmItemProps> = ({ film }) => {
  const router = useRouter()
  return (
    <div className="flex flex-row gap-2" onClick={() => {
      if (film.type === "movie") {
        router.push("movies/" + film.id)
      } else if (film.type === "anime") {
        router.push("anime/" + film.id)
      } else if (film.type === "cartoon") {
        router.push("cartoons/" + film.id)
      }
    }}>
      <div>
        <Image src={film.poster || ""} width={40} height={60} alt="" />
      </div>
      <div className="font-bold text-lg">
        {film.name}
      </div>
    </div>
  )
};

export default Search;
