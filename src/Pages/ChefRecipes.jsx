import React from 'react';
import PageTopBanner from '../sections/PageTopBanner';
import ChefRecipe from '../sections/ChefRecipe';

const ChefRecipes = () => {
    return (
        <>
            <PageTopBanner slag={'Chef Recipes'} />
            <ChefRecipe />
        </>
    );
};

export default ChefRecipes;