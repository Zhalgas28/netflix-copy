import { useAppSelector } from "@/src/hooks/redux";
import { useGetFilmsQuery } from "@/src/services/netflixService";
import Content from "../../Content/Content";

const Cartoons = () => {
  const filter = useAppSelector(state => state.filter)
  const { isFetching, isLoading, data } = useGetFilmsQuery({
    limit: 20,
    page: 1,
    type: "cartoon",
    filters: filter.filters
  });

  return <Content title="Cartoons" data={data} isFetching={isFetching} isLoading={isLoading} />;
};

export default Cartoons;
