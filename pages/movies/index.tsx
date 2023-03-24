import Meta from "@/src/components/Meta/Meta";
import Movies from "@/src/components/screens/movies/Movies";
import {  NextPage } from "next";

const MoviesPage: NextPage = () => {
  return (
    <>
      <Meta title="Movies" />
      <Movies />
    </>
  )
}

export default MoviesPage