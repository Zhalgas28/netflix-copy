import { BiLoaderAlt } from "react-icons/bi"

const Loader = () => {
    return (
      <div className="fixed left-[calc(50%-65px)] top-[calc(50%-65px)] z-99">
        <BiLoaderAlt size={65} className="text-white animate-spin" />
      </div>
    )
};

export default Loader;
