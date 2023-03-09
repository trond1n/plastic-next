import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Sticky from 'react-stickynode';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeedbackForm from './FeedbackForm';
const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Sticky enabled={true} top={0} innerZ={9999}>
        <Navbar />
      </Sticky>

      {children}
      <FeedbackForm />
    </>
  );
};

export default Layout;
