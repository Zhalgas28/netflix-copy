import { useGetFilmQuery } from "@/src/services/netflixService";
import { useRouter } from "next/router";

const FilmItem = () => {
  const router = useRouter()
  const id = router.query.id 
  const { isFetching, isLoading, data: film } = useGetFilmQuery({ id })
  return <div>
    {JSON.stringify(film)}
  </div>;
};

export default FilmItem;
