import { IMovie } from "@/src/types/IMovie";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface FactsProps {
  movie: IMovie | undefined
  className?: string
}

const Facts: FC<FactsProps> = ({ movie, className }) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <h2 className="text-white text-3xl font-semibold border-b border-gray-600 pb-[17px]">Знаете ли вы, что...</h2>
      {movie?.facts.slice(0, 4).map(fact => {
        return <div
          key={fact.value} 
          className="border-b font-light text-sm xs:text-base border-gray-600 pt-[15px] pb-[17px]" 
          dangerouslySetInnerHTML={{ __html: fact.value ?? "" }}
        />
      })}
    </div>
  )
};

export default Facts;
