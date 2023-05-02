import React from 'react';
import Hero from '../sections/Hero';
import RecipeCategories from '../sections/RecipeCategories';

const Home = () => {
    return (
        <div>
            <Hero />
            <RecipeCategories />
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );
};

export default Home;