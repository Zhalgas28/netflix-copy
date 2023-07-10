import { useAppDispatch, useAppSelector } from "@/src/hooks/redux";
import { useForm } from "react-hook-form";
import { genres } from "@/src/data/moviesGenres";
import { ratings } from "@/src/data/moviesRatings";
import { years } from "@/src/data/moviesYears";
import { sortTypes } from "@/src/data/moviesSortTypes";
import { resetFilters, setGenre, setRating, setSort, setYear } from "@/store/reducers/filterSlice";
import { memo, useEffect } from "react";

interface FormValuesType {
  genre: string
  rating: string
  year: string
  sort: string
}

const Filter = () => {
  const { filters } = useAppSelector(state => state.filter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetFilters())
  }, [dispatch])

  const {
    register,
    handleSubmit,
    reset
  } = useForm<FormValuesType>({
    defaultValues: filters,
    values: filters
  })

  const onChange = (v: FormValuesType) => {
    dispatch(setGenre(v.genre))
    dispatch(setYear(v.year))
    dispatch(setRating(v.rating))
    dispatch(setSort(v.sort))
  }

  return (
    <form className="hidden lg:flex w-full mt-5 justify-between items-center mb-10" onChange={handleSubmit(onChange)}>
      <div className="flex gap-x-2 items-center">
        <select {...register("genre")} className="bg-zinc-800 font-semibold text-white py-2 px-5 rounded-md">
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
        <select {...register("rating")} className="bg-zinc-800 font-semibold text-white py-2 px-5 rounded-md">
          {ratings.map(rating => {
            return (
              <option value={rating.value} key={rating.value}>
                {rating.name}
              </option>
            )
          })}
        </select>
        <select {...register("year")} className="bg-zinc-800 font-semibold text-white py-2 px-5 rounded-md">
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
      </div>
      <div>
      <select {...register("sort")} className="bg-zinc-800 font-semibold text-white py-2 px-5 rounded-md">
        {sortTypes.map(sortType => {
          return <option value={sortType.value} key={sortType.value}>
            {sortType.name}
          </option>
        })}    
      </select>
      </div>
    </form>
  )
};

export default memo(Filter);
