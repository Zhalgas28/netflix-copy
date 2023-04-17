import Link from "next/link";
import styles from "./Header.module.scss";
import { BsSearch, BsBell } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import classNames from "classnames";
import Image from "next/image";

const Header = () => {
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showBackground, setShowBackground] = useState<boolean>(false)

  const hideVisible = () => {
    setShowMobileMenu(false)
  }

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 65) {
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

  return (
    <header className={classNames({[styles.header]: true}, {"bg-zinc-900": showBackground})}>
      <nav className={styles.logoWrapper}>
        <Image src="/images/logo.png" width={118.3} height={32} alt="logo"/>
      </nav>
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
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
        <MobileMenu setVisible={hideVisible} visible={showMobileMenu} />
      </div>
      <div className={styles.actions}>
        <div className={styles.actions__item}>
          <BsSearch size={18} />
        </div>
        <div className={styles.actions__item}>
          <BsBell size={18} />
        </div>
        <div
          className={styles.profile}
          onClick={() => setShowAccountMenu((prev) => !prev)}
        >
          <Image src="/images/default-blue.png" alt="profile" width={32} height={32} className="ml-3" />
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
