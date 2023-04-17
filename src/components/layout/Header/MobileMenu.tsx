import Link from "next/link";
import { FC } from "react";

const MobileMenu: FC<{visible: boolean}> = ({ visible }) => {
    if (!visible) {
      return null
    }  

    return (
      <div className="absolute right-0 top-10 bg-black xs:w-36 text-white flex py-3 px-8 text-lg flex-col gap-4">
        <Link href={"/"}>
          Home
        </Link>
        <Link href={"/cartoons"}>
          Cartoons
        </Link>
        <Link href={"/movies"}>
          Movies
        </Link>
        <Link href={"/anime"}>
          Anime
        </Link>
        <Link href={"/auth"}>
          Login
        </Link>
      </div>
    )
};

export default MobileMenu;
