import { FC, useState } from "react";
import { twMerge } from "tailwind-merge"


interface DescriptionProps {
  text: string | undefined
  className?: string
}

const Description: FC<DescriptionProps> = ({ text, className }) => {
  const [ isShort, setIsShort ] = useState<boolean>(true)
  
  const words = text?.split(" ")
  const shortDescription = words?.splice(0, 17).join(" ")
  const description = isShort ? shortDescription : text

  return (
    <>
      <p className={twMerge("text-gray-400 font-light text-[16px] md:text-[20px] leading-6 md:leading-8 lg:max-w-[70%]", className)}>
        {description}
      </p>
      { isShort ? (
        <button className="text-blue-700 mt-4 text-xl font-semibold" onClick={() => setIsShort(false)} >
          Подробное описание
        </button>
      ) : (
        <button className="text-blue-700 mt-4 text-xl font-semibold" onClick={() => setIsShort(true)} >
          Свернуть описание
        </button>
      )}
    </>
  )
};

export default Description;
