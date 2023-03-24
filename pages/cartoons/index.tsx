import Meta from "@/src/components/Meta/Meta";
import Cartoons from "@/src/components/screens/cartoons/Cartoons";
import {  NextPage } from "next";

const CartoonsPage: NextPage = () => {
  return (
    <>
      <Meta title="Movies" />
      <Cartoons />
    </>
  )
}

export default CartoonsPage