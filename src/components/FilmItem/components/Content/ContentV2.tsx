import Facts from "@/src/components/Facts/Facts";
import Slider from "@/src/components/slider/Slider";
import { IMovie } from "@/src/types/IMovie";
import Image from "next/image";
import { FC } from "react";
import Description from "../../../Description/Description";

interface ContentProps {
  film: IMovie | undefined
}

const ContentV2: FC<ContentProps> = ({ film }) => {
  return (
    <div className="px-10 pb-10 pt-20 sm:pt-32 text-white">
      <div className="flex flex-col justify-center md:justify-start md:flex-row gap-8">
        <div className="mr-12 w-[192px] rounded-md overflow-hidden mb-2">
          <Image
            src={film?.poster.url || ""}
            alt={film?.name || ""}
            width={192}
            height={288}
            priority
            loading="eager"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-4xl font-semibold">
            {film?.name || film?.enName}
          </h1>
          <div className="flex flex-row flex-wrap gap-y-2 gap-x-2 sm:gap-x-4 text-gray-500 font-semibold text-base sm:text-lg">
            <div className="bg-green-700 text-white px-2 font-semibold rounded-md">
              {film?.rating.kp.toFixed(1) || film?.rating.imdb.toFixed(1) || 5.0}
            </div>
            <span>{film?.year}</span>
            <span>{film?.genres[0].name}</span>
            <span>{film?.ageRating || 0}+</span>
            <span>{film?.countries[0].name}</span>
          </div>
          <span className="text-lg max-w-[600px] opacity-90">{film?.shortDescription}</span>
          {(film?.budget.value && film?.budget.currency) && (
            <span className="text-lg text-gray-500">Бюджет:
              <span className="text-white ml-2">
                {film?.budget.value.toLocaleString()}{film?.budget.currency}
              </span>
            </span>
          )}
          {(film?.movieLength ) && (
            <span className="text-lg text-gray-500">Длительность:
              <span className="text-white ml-2">
                {film?.movieLength} минут
              </span>
            </span>
          )}
          <div className="flex flex-row gap-4">
            <button className="flex justify-center items-center px-4 py-2 bg-red-600 hover:opacity-50 rounded-lg transition font-semibold md:text-lg">
              Смотреть фильм
            </button>
            <button className="flex justify-center items-center px-4 py-2 bg-gray-700 hover:opacity-50 rounded-lg transition font-semibold md:text-lg">
              Трейлер
            </button>
          </div>
        </div>
      </div>
      <Description text={film?.description} className="mt-8" />
      <h2 className="text-white font-semibold mb-5 mt-14 text-3xl ">Похожие фильмы</h2>
      <Slider movie={film} />
      <Facts movie={film} className="mt-14" />
    </div>
  )
};

export default ContentV2;
