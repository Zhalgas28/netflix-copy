import { IMovie } from "@/src/types/IMovie";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface SliderProps {
  movie: IMovie | undefined
  className?: string
}

const Slider: FC<SliderProps> = ({ movie, className }) => {
  const router = useRouter()
  return (
    <div className={className}>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          410: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          587: {
            slidesPerView: 3,
            spaceBetween: 7
          },
          790: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1090: {
            slidesPerView: 7,
            spaceBetween: 10
          },
          1450: {
            slidesPerView: 9,
            spaceBetween: 15
          }
        }}
        className="w-full flex justify-center"
      >
        {movie?.similarMovies.map(movie => {
          return <SwiperSlide key={movie.id} className="w-fit">
            <div className="h-56 w-[149.4px] cursor-pointer object-cover rounded-md overflow-hidden" onClick={() => {
              router.push(movie.id.toString());
            }}>
              <Image
                src={movie?.poster?.url || ""}
                alt={movie?.name || ""}
                height={224}
                width={149.3}
                priority
                loading="eager"
              />
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
};

export default Slider;
