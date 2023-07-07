import Link from "next/link";
import { FC } from "react";

const routes = [
  { label: "Главная", href: "/" },
  { label: "Фильмы", href: "/movies" },
  { label: "Мультфильмы", href: "/cartoons" },
  { label: "Аниме", href: "/anime" },
]

const MobileMenu: FC<{ visible: boolean, setVisible: any }> = ({ visible, setVisible }) => {
  if (!visible) {
    return null
  }

  return (
    <div className="absolute left-[-80px] top-10 bg-black xs:w-36 text-white flex rounded-md py-3 px-8 text-lg flex-col gap-4">
      {routes.map(route => {
        return <Link href={route.href} onClick={setVisible} className="hover:text-red-700 transition" key={route.label}>
          {route.label}
        </Link>
      })}
    </div>
  )
};

export default MobileMenu;
