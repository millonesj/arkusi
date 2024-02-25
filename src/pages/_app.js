import Head from 'next/head';
import PropTypes from 'prop-types';
import Script from 'next/script';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Layout from '../components/layout/layout';
import { ScrollToTop } from '../components/scroll';
import '../styles/globals.css';

const GA_MEASUREMENT_ID = 'G-K7DDNFNQN2';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
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
                <FloatingWhatsApp
                    phoneNumber="+51 950761942"
                    accountName="Atención al cliente"
                    statusMessage="Normalmente responde en 30 minutos"
                    chatMessage="¡Hola! 😊 ¿Tienes alguna pregunta? ¡Escríbeme y te responderé pronto!"
                    placeholder="Escribe tu mensaje aquí..."
                    avatar="data:image/jpeg;base64,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"
                />
            </Layout>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.instanceOf(Object).isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
