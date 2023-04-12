import Head from "next/head";
import { FC, ReactNode } from "react";

type PropsType = {
  title: string;
};

function getTitle(title: string) {
  return title + " - Netflix"
}

const Meta: FC<PropsType> = ({ title }) => {
  
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
      </Head>
    </>
  );
};

export default Meta;
