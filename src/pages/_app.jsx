import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import '../styles/globals.scss';
const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />{' '}
  </Layout>
);
export default App;
