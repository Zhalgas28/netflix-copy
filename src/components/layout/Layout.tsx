import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import Header from "./Header/Header";
import styles from "./Layout.module.scss"

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter()
    const invisible = router.pathname.includes("slider-video")
    return (
        <div className={styles.layout}>
            { !invisible && (
                <Header />
            )}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
};

export default Layout;
