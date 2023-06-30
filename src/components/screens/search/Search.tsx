import { useSearchFilmsQuery } from "@/src/services/netflixService";
import { FC, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import { useDebounce } from "@/src/hooks/useDebounce";
import SearchList from "./SearchList";

interface ISearchProps {
  onClose: () => void
}

const Search: FC<ISearchProps> = ({ onClose }) => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce<string>(search)
  const { data, isFetching, isLoading } = useSearchFilmsQuery({ limit: 20, search: debouncedSearch }, {
    skip: search.length === 1
  })
  

  return (
    <div className="bg-black opacity-95 fixed left-0 top-0 h-full w-full overflow-auto z-50 justify-center">
      <div className="absolute top-10 right-6 sm:right-14" onClick={onClose}>
        <AiOutlineClose size={30} className="text-gray-300 hover:opacity-50 transition" />
      </div>
      <div className="my-[100px] mx-auto w-[300px] sm:w-[500px] md:w-[600px] lg:w-[800px]">
        <h2 className="text-white font-bold text-5xl">Поиск</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          placeholder="Фильмы, аниме, мультфильмы" 
          className="p-[10px] w-full bg-white outline-none text-black rounded-2xl mt-7"
        />
        <SearchList data={data} onClose={onClose} isFetching={isFetching} isLoading={isLoading} />
      </div>
    </div>  
  )
};

export default Search;
