import Link from "next/link";
import styles from "./Header.module.scss";
import { BsSearch, BsBell } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <nav className={styles.logoWrapper}>
        <img src="/images/logo.png" className="h-full" />
      </nav>
      <div className={styles.navItems}>
        <Link className={styles.item} href={"/"}>
          Home
        </Link>
        <Link className={styles.item} href={"/series"}>
          Series
        </Link>
        <Link className={styles.item} href={"/movies"}>
          Movies
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
        <MobileMenu visible={showMobileMenu} />
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
          <img src="/images/default-blue.png" className=" w-7 md:w-10 ml-3" />
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
