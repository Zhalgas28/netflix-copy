import FilmItem from "@/src/components/FilmItem/Filmitem";
import {  NextPage } from "next";
import Meta from "@/src/components/Meta/Meta";

const MoviePage: NextPage = () => {
  return (
    <>
      <Meta title={"Movie"} />
      <FilmItem />
    </>
  );
};

export default MoviePage;
