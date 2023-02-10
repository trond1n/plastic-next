import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import '../styles/globals.scss';
const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />{' '}
  </Layout>
);
export default App;
