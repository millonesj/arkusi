import Head from 'next/head';
import PropTypes from 'prop-types';
import Script from 'next/script';
import Layout from '../components/layout/layout';
import { ScrollToTop } from '../components/scroll';
import '../styles/globals.css';

const GA_MEASUREMENT_ID = 'G-K7DDNFNQN2';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                src={`"https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"`}
                strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', '${GA_MEASUREMENT_ID}');
                    `}
            </Script>
            <Layout>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="shortcut icon" href="../favicon.png" />
                </Head>
                <Component {...pageProps} />
                <ScrollToTop />
            </Layout>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.instanceOf(Object).isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
