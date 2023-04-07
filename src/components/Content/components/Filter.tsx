import { genres } from "@/src/data/moviesGenres";
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux";
import { useForm } from "react-hook-form";
import { setGenre, setRating, setYear} from "@/store/reducers/filterSlice";

type formValuesType = {
  minRating: string;
  maxRating: string;
  minYear: string;
  maxYear: string;
  genre: string;
};


const Filter = () => {
  const { filters: {genre, year, rating} } = useAppSelector((state) => state.filter);

  const { register, watch, handleSubmit, reset } = useForm<formValuesType>({
    defaultValues: {
      minRating: "0",
      maxRating: "10",
      minYear: "1965",
      maxYear: "2023",
      genre: "",
    },
    values: {
      minRating: rating.split("-")[0],
      maxRating: rating.split("-")[1],
      minYear: year.split("-")[0],
      maxYear: year.split("-")[1],
      genre: genre,
    }
  });

  const watchMinRating = watch("minRating");
  const watchMaxRating = watch("maxRating");

  const dispatch = useAppDispatch();

  const onSubmit = (values: formValuesType) => {
    dispatch(setGenre(values.genre));
    dispatch(setRating(`${values.minRating}-${values.maxRating}`));
    dispatch(setYear(`${values.minYear}-${values.maxYear}`));
  };

  return (
    <form
      className="flex flex-row gap-10 items-start mb-6 flex-wrap"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <input
            {...register("minRating")}
            id="minRating"
            type={"range"}
            min="0"
            max={"10"}
          />
          <span className="text-white">Min rating: {watchMinRating}</span>
        </div>
        <div className="flex flex-col gap-1">
          <input
            {...register("maxRating")}
            id="maxRating"
            type={"range"}
            min="0"
            max={"10"}
          />
          <span className="text-white">Max rating: {watchMaxRating}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <span className="text-white">Min year</span>
          <input
            className="py-1 px-1 w-14 focus:outline-none rounded-md"
            {...register("minYear")}
            type="number"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <span className="text-white">Max year</span>
          <input
            className="py-1 px-1 w-14 focus:outline-none rounded-md"
            {...register("maxYear")}
            type="number"
          />
        </div>
      </div>
      <div>
        <select {...register("genre")} className="py-2 px-1 rounded-md">
          <option value="">
            Все жанры
          </option>
          {genres.map((genre) => {
            return (
              <option value={genre.name} key={genre.slug}>
                {genre.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <button
          type="submit"
          className="text-white bg-red-700 rounded-md px-4 py-2 hover:opacity-60 transition"
        >
          Find
        </button>
      </div>
    </form>
  );
};

export default Filter;
