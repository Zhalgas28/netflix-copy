import { useGetFilmsQuery } from "@/src/services/netflixService";
import { IMovie } from "@/src/types/IMovie";
import { FC } from "react";
import Content from "../../Content/Content";

const Movies: FC = () => {
  const { data, isFetching, isLoading } = useGetFilmsQuery({
    limit: 20,
    page: 1,
    type: "movie"
  })

  return <Content data={data} isLoading={isLoading} isFetching={isFetching} />
};

export default Movies;
