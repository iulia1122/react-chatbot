import { Suspense } from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";
import Navigation from "../Navigation/Navigation";
import { navLinks } from "../../routes/routes";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.menu__container}>
        <Navigation pages={navLinks} />
      </div>

      <div className={styles.main__content}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
