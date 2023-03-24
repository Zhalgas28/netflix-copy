import { FC } from "react";

const Heading: FC<{title: string}> = ({ title }) => {
    return (
      <h1 className="text-3xl text-white uppercase mb-10">
        {title}
      </h1>
    )
};

export default Heading;