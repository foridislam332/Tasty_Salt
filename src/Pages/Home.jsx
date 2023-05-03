import React from 'react';
import Hero from '../sections/Hero';
import RecipeCategories from '../sections/RecipeCategories';
import Chef from '../sections/Chef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <Hero />
            <RecipeCategories />
            <Chef />
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );
};

export default Home;