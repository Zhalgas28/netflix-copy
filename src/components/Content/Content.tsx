import { useAppDispatch } from "@/src/hooks/redux";
import { IMovies } from "@/src/types/IMovies";
import { resetFilters } from "@/store/reducers/filterSlice";
import { FC, useEffect } from "react";
import Loader from "../assets/Loader";
import Data from "./components/Data";
import Filter from "./components/Filter";
import Heading from "./components/Heading";

type PropsType = {
  data: IMovies | undefined;
  isLoading: boolean;
  isFetching: boolean;
  title?: string;
};

const Content: FC<PropsType> = ({ data, isFetching, isLoading, title ="Movies" }) => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(resetFilters())
  }, [dispatch])
  
  if (isLoading || isFetching) {
    return <Loader />
  }

  return <div className="pt-24 pb-10 px-10 flex flex-col items-center">
    <Heading title={title} />
    <Filter />
    <Data data={data} />
  </div>;
};

export default Content;
