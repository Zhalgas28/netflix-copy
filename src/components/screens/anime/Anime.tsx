import { useAppSelector } from "@/src/hooks/redux";
import { useGetFilmsQuery } from "@/src/services/netflixService";
import Content from "../../Content/Content";

const Anime = () => {
  const filter = useAppSelector(state => state.filter)

  const {data, isLoading, isFetching} = useGetFilmsQuery({
    limit: 20,
    page: 1,
    type: "anime",
    filters: filter.filters
  })
  
  return <Content title="Anime" data={data} isLoading={isLoading} isFetching={isFetching} />;
};

export default Anime;
