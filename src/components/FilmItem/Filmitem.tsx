import { useGetFilmQuery } from "@/src/services/netflixService";
import { useRouter } from "next/router";
import { FC } from "react";
import Loader from "../assets/Loader";
import Content from "./components/Content/Content";
import ContentV2 from "./components/Content/ContentV2";

const FilmItem: FC = () => {
  const router = useRouter()
  const id = router.query.id
  const { isFetching, isLoading, data: film } = useGetFilmQuery({ id })
  
  if (isFetching || isLoading) {
    return <Loader />
  }
  return <ContentV2 film={film} />
};

export default FilmItem;
