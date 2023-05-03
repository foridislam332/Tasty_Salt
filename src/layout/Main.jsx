import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';

const Main = () => {
    return (
        <>
            <ScrollToTop />

            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default Main;