import React from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';
import PageLoader from '../components/PageLoader';

const Main = () => {
    const navigation = useNavigation();

    let content;

    if (navigation.state === "loading") {
        content = <PageLoader />
    }

    else if (navigation.state !== "loading") {
        content = <Outlet />
    }

    return (
        <>
            <ScrollToTop />

            <Navbar />

            <main>
                {content}
            </main>

            <Footer />
        </>
    );
};

export default Main;