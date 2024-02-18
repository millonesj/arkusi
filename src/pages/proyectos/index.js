import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import HeaderTwo from '../../components/header/header-2';
import AllProjects from '../../components/projects/all-projects';
import { getAllItems } from '../../lib/items-util';

function allItemsPage({ projects }) {
    return (
        <>
            <Head>
                <title>Todos los proyectos</title>
                <meta
                    name="description"
                    content="¡Una lista de todos los proyectos relacionados con la arquitectura e interiorismo!"
                />
            </Head>
            <HeaderTwo />
            <Breadcrumb activePage="Proyectos" pageTitle="Nuestros proyectos" />
            <AllProjects projects={projects} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');

    return {
        props: {
            projects: allItems,
        },
    };
}

allItemsPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default allItemsPage;
