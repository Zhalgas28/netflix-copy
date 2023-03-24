import Meta from "@/src/components/Meta/Meta";
import Anime from "@/src/components/screens/anime/Anime";
import {  NextPage } from "next";

const AnimePage: NextPage = () => {
  return (
    <>
      <Meta title="Movies" />
      <Anime />
    </>
  )
}

export default AnimePage