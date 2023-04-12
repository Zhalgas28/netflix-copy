import { IMovie } from "@/src/types/IMovie";
import { useRouter } from "next/router";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

type PropsType = {
  film: IMovie | undefined;
};

const SimilarMovies: FC<PropsType> = ({ film }) => {
  const router = useRouter();
  return (
    <div className="mt-5">
      <h3 className="text-white text-2xl mb-4">Похожие фильмы</h3>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        className="w-full flex justify-center"
      >
        {film?.similarMovies.map((sim) => {
          return (
            <SwiperSlide key={sim.id} className="w-fit">
              <div
                className="w-[149.4px] flex flex-col cursor-pointer"
                onClick={() => {
                  router.push(sim.id.toString());
                }}
              >
                <div className="h-56 object-cover rounded-md overflow-hidden">
                  <Image
                    src={sim?.poster?.url || ""}
                    alt={sim?.name || ""}
                    height={224}
                    width={149.3}
                  />
                </div>
                <div className="text-white line-clamp-2 text-lg">
                  {sim.name}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
// const SimilarMovies: FC<PropsType> = ({ film }) => {
//   const router = useRouter();
//   return (
//     <div className="mt-5">
//       <h3 className="text-white text-2xl mb-4">Похожие фильмы</h3>
//       <div className="flex flex-row gap-4 flex-wrap">
//         {film?.similarMovies.map((sim) => {
//           return (
//             <div
//               key={sim.id}
//               className="w-[149.4px] flex flex-col cursor-pointer"
//               onClick={() => {
//                 router.push(sim.id.toString());
//               }}
//             >
//               <div className="h-56 w-auto object-cover rounded-md overflow-hidden">
//                 <img
//                   src={sim?.poster?.url}
//                   alt={sim?.name}
//                   className="h-56 w-full object-cover"
//                 />
//               </div>
//               <div className="text-white line-clamp-2 text-lg">{sim.name}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export default SimilarMovies;
