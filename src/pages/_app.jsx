import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />{' '}
  </Layout>
);
export default App;
