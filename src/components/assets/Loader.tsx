import { BiLoaderAlt } from "react-icons/bi"

const Loader = () => {
    return (
      <div className="flex items-center justify-center">
        <BiLoaderAlt size={65} className="text-white animate-spin" />
      </div>
    )
};

export default Loader;
