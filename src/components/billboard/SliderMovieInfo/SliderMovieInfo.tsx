import { ISliderMovie } from "@/src/hooks/getRandomMovie";
import { FC } from "react";
import styles from "./SliderMovieInfo.module.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai"
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai"


type PropsType = {
  movie: ISliderMovie | undefined
  setVisible: () => void
}

const SliderMovieInfo: FC<PropsType> = ({ movie, setVisible }) => {
  const router = useRouter();
  return (
    <div className={styles.block}>
      <div className={styles.content} >
        <div className={styles.close} onClick={setVisible}><AiFillCloseCircle size={25}/></div>
        <div className="min-h-[150px] md:min-h-[250px] w-[300px] md:w-[500px] relative mb-5">
          <Image src={movie?.thumbnailUrl || ""} fill alt="Image"/>
        </div>
        <div className={styles.title}>{movie?.title}</div>
        <div className={styles.description}>{movie?.description}</div>
        <button
          onClick={() => router.push(`slider-video/${movie?.id}`)}
          className="w-10 h-10 bg-white rounded-[50%] ml-5 mt-4 flex items-center justify-center "
        >
          <BsFillPlayFill size={25} className="text-black" />
        </button>
        <div className="flex-grow"></div>
        <div className="mt-5 mx-5  flex justify-between mb-5">
          <span>
            <span className="mr-2">Genre:</span>
            {movie?.genre}
          </span>
          <span className="text-green-700">{movie?.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderMovieInfo;
