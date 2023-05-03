import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const chefRecipe = useLoaderData();
    console.log(chefRecipe)
    return (
        <div>
            Chef Recipes coming
        </div>
    );
};

export default ChefRecipes;