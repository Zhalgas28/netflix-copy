import { useGetFilmsQuery } from "@/src/services/netflixService";
import Content from "../../Content/Content";

const Cartoons = () => {
  const { isFetching, isLoading, data } = useGetFilmsQuery({
    limit: 20,
    page: 1,
    type: "cartoon",
  });

  return <Content title="Cartoons" data={data} isFetching={isFetching} isLoading={isLoading} />;
};

export default Cartoons;
