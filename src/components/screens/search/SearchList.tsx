import { IMoviesSearchResult } from "@/src/types/IMovies";
import { FC } from "react";
import Spinner from "../../assets/Spinner";
import SearchFilmItem from "./SearchFIlmItem";

interface SearchListProps {
  data: IMoviesSearchResult | undefined
  onClose: () => void
  isLoading: boolean
  isFetching: boolean
}

const SearchList: FC<SearchListProps> = ({ data, onClose, isLoading, isFetching }) => {
  if (isLoading || isFetching) {
    return <div className="mt-10 flex justify-center">
      <Spinner />
    </div>
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mt-[30px]">
      {data?.docs.map(film => {
        return <SearchFilmItem key={film.id} onClose={onClose} film={film} />
      })}
    </div>
  )
};

export default SearchList;
