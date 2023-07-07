import { FC } from "react";

const Heading: FC<{title: string}> = ({ title }) => {
    return (
      <h1 className="text-5xl text-white font-bold">
        {title}
      </h1>
    )
};

export default Heading;