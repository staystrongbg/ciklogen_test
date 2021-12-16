import '../styles/globals.css';
import Layout from '../components/layout';
import fotke from '../fotke';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} {...fotke} />
    </Layout>
  );
}

export default MyApp;
