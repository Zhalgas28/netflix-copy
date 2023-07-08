import { useAppDispatch, useAppSelector } from "@/src/hooks/redux";
import { useForm } from "react-hook-form";
import { genres } from "@/src/data/moviesGenres";
import { ratings } from "@/src/data/moviesRatings";
import { years } from "@/src/data/moviesYears";
import { sortTypes } from "@/src/data/moviesSortTypes";
import { setGenre, setRating, setSort, setYear } from "@/store/reducers/filterSlice";
import { FC } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai"


interface FormValuesType {
  genre: string
  rating: string
  year: string
  sort: string
}

interface MobileFilterProps {
  isOpenMFilter: boolean
  onClose: () => void
}

const MobileFilter: FC<MobileFilterProps> = ({ isOpenMFilter, onClose }) => {
  const { filters } = useAppSelector(state => state.filter)
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit
  } = useForm<FormValuesType>({
    defaultValues: filters
  })

  const onSubmit = (v: FormValuesType) => {
    onClose()
    dispatch(setGenre(v.genre))
    dispatch(setYear(v.year))
    dispatch(setRating(v.rating))
    dispatch(setSort(v.sort))
  }

  if (!isOpenMFilter) {
    return null
  }

  return (
    <form className="fixed w-screen h-screen overflow-y-auto overflow-x-hidden bg-black bg-opacity-95 left-0 top-0 z-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-[30px] sm:py-[50px] sm:px-[80px]">
        <div className="flex justify-between items-center mb-10">
          <div className="relative cursor-pointer mr-2 md:mr-5 md:w-[118.3px] md:h-[32px] w-[90px] h-[24.3px]">
            <Image 
              src="/images/logo.png" 
              alt="logo"
              fill
            />
          </div>
          <div onClick={onClose}>
            <AiOutlineClose size={25} className="text-white hover:opacity-50 transition" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-bold text-3xl mb-5">Фильтры</h2>
          <select {...register("genre")} className="bg-zinc-800 w-full font-semibold text-white py-2 px-5 rounded-md">
            <option value="">
              Все жанры
            </option>
            {genres.map((genre) => {
              return (
                <option value={genre.name} key={genre.slug} >
                  {genre.name}
                </option>
              );
            })}
          </select>
          <select {...register("rating")} className="bg-zinc-800 w-full font-semibold text-white py-2 px-5 rounded-md">
            {ratings.map(rating => {
              return (
                <option value={rating.value} key={rating.value}>
                  {rating.name}
                </option>
              )
            })}
          </select>
          <select {...register("year")} className="bg-zinc-800 w-full font-semibold text-white py-2 px-5 rounded-md">
            <option value="1960-2030">
              Все годы
            </option>
            {years.map(year => {
              return (
                <option value={year} key={year}>
                  {year}
                </option>
              )
            })}
          </select>
          <select {...register("sort")} className="bg-zinc-800 w-full font-semibold text-white py-2 px-5 rounded-md">
            {sortTypes.map(sortType => {
              return <option value={sortType.value} key={sortType.value}>
                {sortType.name}
              </option>
            })}
          </select>
          <button type="submit" className="flex items-center w-full text-base font-semibold mt-4 md:text-xl justify-center py-2 px-3 bg-red-700 hover:opacity-70 transition rounded-lg text-white">
            Показать результаты
          </button>
        </div>
      </div>
    </form>
  )
};

export default MobileFilter;
