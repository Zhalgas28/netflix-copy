import { IMovie } from "@/src/types/IMovie";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { twMerge } from "tailwind-merge";

interface SliderProps {
  movie: IMovie | undefined
  className?: string
}

const breakpoints = {
  450: {
    slidesPerView: 3,
    spaceBetween: 5
  },
  587: {
    slidesPerView: 4,
    spaceBetween: 7
  },
  790: {
    slidesPerView: 4,
    spaceBetween: 10
  },
  970: {
    slidesPerView: 5,
    spaceBetween: 10
  },
  1050: {
    slidesPerView: 6,
    spaceBetween: 10
  },
  1450: {
    slidesPerView: 8,
    spaceBetween: 15
  }
};

const Slider: FC<SliderProps> = ({ movie, className }) => {
  const router = useRouter()
  return (
    <div className={twMerge("flex", className)}>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        breakpoints={breakpoints}
      >
        {movie?.similarMovies.map(movie => {
          return <SwiperSlide key={movie.id} className="w-auto">
            <div className="h-[170px] w-[113px] md:h-[224px] md:w-[149px] cursor-pointer object-cover rounded-lg overflow-hidden" onClick={() => {
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
