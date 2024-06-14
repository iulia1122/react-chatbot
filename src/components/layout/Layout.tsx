import React, { Suspense } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';
import Navigation from '../Navigation/Navigation';


const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
    
    <div className={styles.menu__container}>
      <Navigation/>
      <Suspense fallback={<Loader />}>
          <Outlet />
      </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;