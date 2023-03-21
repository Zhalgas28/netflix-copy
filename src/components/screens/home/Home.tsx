import { ISliderMovie } from "@/src/hooks/getRandomMovie";
import { FC } from "react";
import Billboard from "../../billboard/Billboard";

const Home: FC<{movie: ISliderMovie}> = ({ movie }) => {
    return (
      <div>
        <Billboard movie={movie} />
      </div>
    )
};

export default Home;
