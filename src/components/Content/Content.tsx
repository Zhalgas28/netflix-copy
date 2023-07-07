import { IMovies } from "@/src/types/IMovies";
import { FC, useState } from "react";
import Data from "./components/Data";
import Filter from "././components/Filter"
import Heading from "./components/Heading";
import MobileFIlter from "./components/MobileFilter";
import { GiSettingsKnobs } from "react-icons/gi"


type PropsType = {
  data: IMovies | undefined;
  isLoading: boolean;
  isFetching: boolean;
  title?: string;
};

const Content: FC<PropsType> = ({ data, isFetching, isLoading, title = "Фильмы" }) => {
  const [ isOpenMFilter, setIsOpenMFilter ] = useState(false)


  return <div className="pt-24 pb-10 px-10 flex flex-col max-w-[1792px]">
    <div className="flex justify-between items-center mb-5 lg:block ">
      <Heading title={title} />
      <Filter />
      <div className="flex items-center lg:hidden" onClick={()=>{setIsOpenMFilter(true)}}>
        <GiSettingsKnobs className="text-white" fontWeight="bold" size={25}  />
      </div>
      <MobileFIlter isOpenMFilter={isOpenMFilter} onClose={() => {setIsOpenMFilter(false)}} />
    </div>
    <Data data={data} isFetching={isFetching} isLoading={isLoading} />
  </div>;
};

export default Content;
