import React from 'react';

// rating
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import FavoriteBtn from './FavoriteBtn';

const RecipeCard = ({ recipe }) => {
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#f89223',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg shadow-[#ffffff77]">
            <div className="pt-2 flex items-start justify-between">
                <div className='flex items-center gap-1'>
                    <Rating className='max-w-[80px]' readOnly value={recipe.rating} itemStyles={myStyles} />

                    <span className='text-sm'>{recipe.rating}</span>
                </div>
                <FavoriteBtn count={Math.round(recipe.rating)} />
            </div>

            <h2 className="text-lg font-bold">{recipe.name}</h2>
            <p className="text-gray-600"><span className='text-primary font-medium underline'>Cooking Method:</span> {recipe.cooking_method}</p>

            <div className="bg-white py-2 mt-3">
                <h3 className="font-semibold mb-2">Ingredients:</h3>
                <ul className="list-disc pl-8">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecipeCard;