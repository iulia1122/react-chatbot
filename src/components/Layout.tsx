import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps  { 
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;