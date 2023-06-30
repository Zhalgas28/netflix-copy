import Link from "next/link";
import styles from "./Header.module.scss";
import { BsSearch, BsBell } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import classNames from "classnames";
import Image from "next/image";
import Search from "../../screens/search/Search";

const Header = () => {
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const hideVisible = () => {
    setShowMobileMenu(false)
  }

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 45) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    document.addEventListener("scroll",  handlerScroll)

    return () => {
      document.removeEventListener("scroll", handlerScroll)
    }
  }, [])

  // width={118.3} height={32}

  return (
    <header className={classNames({[styles.header]: true}, {"bg-zinc-900": showBackground})}>
      <div className="relative cursor-pointer mr-2 md:mr-5 md:w-[118.3px] md:h-[32px] w-[90px] h-[24.3px]">
        <Image 
          src="/images/logo.png" 
          alt="logo"
          fill
        />
      </div>
      <div className={styles.navItems}>
        <Link className={styles.item} href={"/"}>
          Home
        </Link>
        <Link className={styles.item} href={"/cartoons"}>
          Cartoons
        </Link>
        <Link className={styles.item} href={"/movies"}>
          Movies
        </Link>
        <Link className={styles.item} href={"/anime"}>
          Anime
        </Link>
        <Link className={styles.item} href={"/auth"}>
          Login
        </Link>
      </div>
      <div className="relative">
        <FiChevronDown
          size={20}
          className={`md:hidden text-white transition ${
            showMobileMenu ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => {
            setShowMobileMenu((prev) => !prev)
            setShowSearch(false)
          }}
        />
        <MobileMenu setVisible={hideVisible} visible={showMobileMenu} />
      </div>
      <div className={styles.actions}>
        <div className={styles.actions__item}>
          <BsSearch size={18} className={styles.actions__logo} onClick={() => {
            setShowSearch(true)
            setShowMobileMenu(false)
            setShowAccountMenu(false)
          }}  />
          {showSearch && 
            <Search onClose={() => setShowSearch(false)} />
          }
        </div>
        <div className={styles.actions__item}>
          <BsBell size={18} className={styles.actions__logo} />
        </div>
        <div
          className={styles.profile}
          onClick={() => setShowAccountMenu((prev) => !prev)}
        >
          <Image src="/images/default-blue.png" alt="profile" width={36} height={36} className="ml-3" />
          <FiChevronDown
            size={20}
            className={`transition ${
              showAccountMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <AccountMenu visible={showAccountMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
