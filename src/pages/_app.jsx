import '../styles/globals.scss';

import Layout from '@/components/Layout/Layout';
const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />{' '}
  </Layout>
);
export default App;
