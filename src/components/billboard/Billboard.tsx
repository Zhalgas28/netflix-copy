import { ISliderMovie } from "@/src/hooks/getRandomMovie";
import { FC, useState } from "react";
import styles from "./Billboard.module.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
import SliderMovieInfo from "./SliderMovieInfo/SliderMovieInfo";
import Loader from "../assets/Loader";

const Billboard: FC<{ movie: ISliderMovie }> = ({ movie }) => {
  const router = useRouter()
  const [ infoIsVisible, setInfoIsVisible ] = useState(false)
  return (
    <div className={styles.movie}>
      <video
        src={movie?.videoUrl}
        poster={movie?.thumbnailUrl}
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className={styles.content}>
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.text}>{movie.description}</p>
        <div className="flex flex-row gap-2">
          <button className={`${styles.button} ${styles.button_red}`} onClick={() => {
            router.push(`slider-video/${movie.id.toString()}`)
          }}>
            <BsFillPlayFill className="mr-1" />
            Play
          </button>
          <button className={styles.button} onClick={() => setInfoIsVisible(true)}>
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
          { infoIsVisible && (
            <SliderMovieInfo movie={movie} setVisible={() => setInfoIsVisible(false)} />
          ) }
        </div>
      </div>
    </div>
  );
};

export default Billboard;
