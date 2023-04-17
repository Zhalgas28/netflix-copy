import FilmItem from "@/src/components/FilmItem/Filmitem";
import {  NextPage } from "next";
import Meta from "@/src/components/Meta/Meta";

const CartoonPage: NextPage = () => {
  return (
    <>
      <Meta title={"Cartoon"} />
      <FilmItem />
    </>
  );
};

export default CartoonPage;
