import Link from "next/link";
import { FC } from "react";

const AccountMenu: FC<{visible: boolean}> = ({visible}) => {
    if (!visible) {
      return null
    }
    
    return (
      <div className="bg-black rounded-md w-56 absolute right-0 top-16 border-gray-700 py-3 px-3 flex flex-col gap-3">
        <Link href={"auth"} className="hover:text-red-700 transition text-center">Войти</Link>
      </div>
    )
};

export default AccountMenu