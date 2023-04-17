import Link from "next/link";
import { FC } from "react";

const MobileMenu: FC<{visible: boolean, setVisible: any}> = ({ visible, setVisible }) => {
    if (!visible) {
      return null
    }  

    return (
      <div className="absolute right-0 top-10 bg-black xs:w-36 text-white flex py-3 px-8 text-lg flex-col gap-4">
        <Link href={"/"} onClick={setVisible}>
          Home
        </Link>
        <Link href={"/cartoons"} onClick={setVisible}>
          Cartoons
        </Link>
        <Link href={"/movies"} onClick={setVisible}>
          Movies
        </Link>
        <Link href={"/anime"} onClick={setVisible}>
          Anime
        </Link>
        <Link href={"/auth"} onClick={setVisible}>
          Login
        </Link>
      </div>
    )
};

export default MobileMenu;
