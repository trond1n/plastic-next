import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Sticky from 'react-stickynode';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Sticky enabled={true} top={0} innerZ={9999}>
        <Navbar />
      </Sticky>

      {children}
      <Footer />
    </>
  );
};

export default Layout;
