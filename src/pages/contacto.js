import Head from 'next/head';
import PropTypes from 'prop-types';
import HeaderTwo from '../components/header/header-2';
import GoogleMap from '../components/contact/google-map';
import ContactForm from '../components/contact/contact-form';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems }) {
    return (
        <>
            <Head>
                <title>Contáctanos</title>
                <meta name="description" content="Envianos tu mensaje!" />
            </Head>
            <HeaderTwo />
            {/* <GoogleMap /> */}
            <ContactForm contactItems={contactItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    return {
        props: {
            contactItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
