import { FC } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface SpinnerProps {
  className?: string
}

const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <BiLoaderAlt
      size={65}
      className={twMerge("text-white animate-spin", className)}
    />
  )
};

export default Spinner;
