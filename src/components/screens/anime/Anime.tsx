import { useGetFilmsQuery } from "@/src/services/netflixService";
import Content from "../../Content/Content";

const Anime = () => {
  const {data, isLoading, isFetching} = useGetFilmsQuery({
    limit: 20,
    page: 1,
    type: "anime"
  })
  
  return <Content data={data} isLoading={isLoading} isFetching={isFetching} />;
};

export default Anime;
