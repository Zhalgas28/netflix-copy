import { useGetFilmQuery } from "@/src/services/netflixService";
import { useRouter } from "next/router";
import { FC } from "react";
import Loader from "../assets/Loader";
import Content from "./components/Content/Content";

const FilmItem: FC = () => {
  const router = useRouter()
  const id = router.query.id
  const { isFetching, isLoading, data: film } = useGetFilmQuery({ id })
  
  if (isFetching || isLoading) {
    return <div className="absolute top-[48%] left-[48%]">
      <Loader />
    </div>
  }
  return <div className="pt-20 pb-10 sm:pt-32 text-white px-10">
    <Content film={film} />
  </div>
};

export default FilmItem;
