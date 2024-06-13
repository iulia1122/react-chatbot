import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

interface LayoutProps  { 
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;