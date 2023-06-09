import Meta from "@/src/components/Meta/Meta";
import Home from "@/src/components/screens/home/Home";
import { ISliderMovie, getRandomMovie } from "@/src/hooks/getRandomMovie";
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = () => {
  const movie = getRandomMovie()
  if (movie === null) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      movie
    },
  }
}

const HomePage: NextPage<{ movie: ISliderMovie | undefined }> = ({ movie }) => {
  return (
    <>
      <Meta title="Home" />
      <Home movie={movie} />
    </>
  )
}

export default HomePage
