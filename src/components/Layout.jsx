import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Sticky from 'react-stickynode';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sticky enabled={true} top={0}>
        <Navbar />
      </Sticky>

      {children}
      <Footer />
    </>
  );
};

export default Layout;
