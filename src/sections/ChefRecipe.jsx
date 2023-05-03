import React from 'react';
import { useLoaderData } from 'react-router-dom';

// images
import image from '../assets/images/1.jpg';
import RecipeBg from '../assets/images/recipe-bg.jpg';

// rating
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ChefRecipe = () => {
    const recipeData = useLoaderData();

    const { name, bio, experience, phone, email, rating, recipes, best_recipe, recipes_list } = recipeData;

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#f89223',
        inactiveFillColor: '#fbf1a9'
    }

    return (
        <section className=''>
            <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto '>
                <div className='grid grid-cols-2 gap-5 place-items-center'>
                    <div>
                        <h1 className='text-4xl font-bold drop-shadow-lg'>{name}</h1>
                        <h3 className='my-2 pt-4'>About</h3>
                        <p>
                            {bio}
                        </p>

                        <div className='flex gap-10 mt-8 text-xl'>
                            <div>
                                <p className='font-medium'>Recipes :
                                    <span className='font-normal text-gray-600 text-lg'> {recipes}</span></p>
                                <p className='font-medium'>Phone: <span className='font-normal text-gray-600 text-lg'>{phone}</span></p>

                                <div className='flex items-center gap-2 mt-4'>
                                    <Rating className='max-w-[140px]' readOnly value={rating} itemStyles={myStyles} />

                                    <span className='text-xl'>{4.3}</span>
                                </div>
                            </div>

                            <div>
                                <p className='font-medium'>Experience :
                                    <span className='font-normal text-gray-600 text-lg'> {experience} Years</span></p>

                                <p className='font-medium'>Email:
                                    <span className='font-normal text-gray-600 text-lg'> {email}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='h-80 md:h-[480px] relative overflow-hidden'>
                        <img src={image} alt={name} />
                    </div>
                </div>
            </div>

            <div className="bg-cover bg-center py-28"
                style={{ backgroundImage: `url(${RecipeBg})` }} >
                <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto'>
                    <h1 className='text-5xl text-secondary text-center pb-20 font-bold'>{name}'s Recipe</h1>

                    <p className='text-white text-3xl mb-4'>
                        <span className='text-secondary font-bold underline'>Best Recipe :</span> {best_recipe}
                    </p>

                    <div>
                        {
                            recipes_list.map((recipe, index) =>
                                <li
                                    key={index}
                                    className='bg-white mb-3 list-decimal p-3 rounded-lg shadow-lg text-3xl'
                                >{recipe.name}
                                    <p className='font-semibold text-base'>Cooking Method : <span className='font-normal text-indigo-600'>{recipe.cooking_method}</span></p>
                                </li>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecipe;