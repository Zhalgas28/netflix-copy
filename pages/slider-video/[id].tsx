import { getRandomMovie } from "@/src/hooks/getRandomMovie";
import { useRouter } from "next/router";

const Video = () => {
  const router = useRouter()
  const { id } = router.query
  const movie = getRandomMovie(Number(id))
  
  return <div className="w-screen h-screen bg-black z-80 relative">
    <video
      src={movie?.videoUrl}
      controls
      className="w-full h-full object-cover"
      autoPlay
    >
    </video>
    <button></button>
  </div>
};

export default Video;
