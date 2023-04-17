import FilmItem from "@/src/components/FilmItem/Filmitem";
import {  NextPage } from "next";
import Meta from "@/src/components/Meta/Meta";

const AnimePage: NextPage = () => {
  return (
    <>
      <Meta title={"Anime"} />
      <FilmItem />
    </>
  );
};

export default AnimePage;
