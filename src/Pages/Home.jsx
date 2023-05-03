import React from 'react';
import Hero from '../sections/Hero';
import RecipeCategories from '../sections/RecipeCategories';
import Chef from '../sections/Chef';
import DessertsMenu from '../sections/DessertsMenu';

const Home = () => {

    return (
        <>
            <Hero />
            <RecipeCategories />
            <Chef />
            <DessertsMenu />
        </>
    );
};

export default Home;