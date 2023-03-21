import { ISliderMovie } from "@/src/hooks/getRandomMovie";
import { FC } from "react";
import styles from "./SliderMovieInfo.module.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai"

type PropsType = {
  movie: ISliderMovie
  setVisible: () => void
}

const SliderMovieInfo: FC<PropsType> = ({ movie, setVisible }) => {
  const router = useRouter();
  return (
    <div className={styles.block}>
      <div className={styles.content} >
        <div className={styles.close} onClick={setVisible}><AiOutlineClose size={25}/></div>
        <div className="h-[40%] w-full">
          <img
            src={movie.thumbnailUrl}
            className="rounded-t-md h-full object-cover w-full"
          />
        </div>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.description}>{movie.description}</div>
        <button
          onClick={() => router.push(`slider-video/${movie.id}`)}
          className="w-10 h-10 bg-white rounded-[50%] ml-5 mt-4 flex items-center justify-center "
        >
          <BsFillPlayFill size={25} className="text-black" />
        </button>
        <div className="flex-grow"></div>
        <div className="mt-5 mx-5  flex justify-between mb-5">
          <span>
            <span className="mr-2">Genre:</span>
            {movie.genre}
          </span>
          <span className="text-green-600">{movie.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderMovieInfo;
