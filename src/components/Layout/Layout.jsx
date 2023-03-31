import React, { useEffect } from 'react';

import Sticky from 'react-stickynode';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeedbackForm from '../FeedbackForm';
import Header from '../Header';
import Footer from '../Footer';
const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Sticky enabled={true} top={0} innerZ={9999}>
        <Header />
      </Sticky>

      {children}
      <FeedbackForm />
      <Footer />
    </>
  );
};

export default Layout;
