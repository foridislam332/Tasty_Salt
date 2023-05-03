import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefRecipeBanner from '../sections/ChefRecipeBanner';

const ChefRecipes = () => {
    const chefRecipe = useLoaderData();
    console.log(chefRecipe)
    return (
        <div>
            <ChefRecipeBanner />
            Chef Recipes coming
        </div>
    );
};

export default ChefRecipes;