import Head from "next/head";
import { FC, ReactNode } from "react"

type PropsType = {
  title: string
}

const Meta: FC<PropsType> = ({ title }) => {
    return (
      <>
        <Head>
          <title>{title} - Netflix</title>
        </Head>
      </>
    )
};

export default Meta;
