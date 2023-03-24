import { IMovies } from "@/src/types/IMovies";
import { FC } from "react";
import Loader from "../assets/Loader";
import Data from "./components/Data";
import Heading from "./components/Heading";

type PropsType = {
  data: IMovies | undefined;
  isLoading: boolean;
  isFetching: boolean;
  title?: string;
};

const Content: FC<PropsType> = ({ data, isFetching, isLoading, title ="Movies" }) => {
  if (isLoading || isFetching) {
    return <div className="absolute top-[48%] left-[48%] ">
      <Loader />
    </div>
  }
  return <div className="pt-24 pb-10 px-10 flex flex-col items-center">
    <Heading title={title} />
    <Data data={data} />
  </div>;
};

export default Content;
