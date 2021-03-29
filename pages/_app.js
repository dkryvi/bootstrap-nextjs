import '../styles/globals.css';
import {useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function App({Component, pageProps}) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>NextJs Bootstrap</title>
        <meta name="description" content="NextJs Bootstrap" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
