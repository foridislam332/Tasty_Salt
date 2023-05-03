import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

// images
import RecipeBg from '../assets/images/recipe-bg.jpg';

const ChefRecipe = () => {
    const recipeData = useLoaderData();

    const { name, image_url, bio, experience, phone, email, recipes, best_recipe, recipes_list } = recipeData;

    return (
        <section className=''>
            <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-5 md:mt-0'>
                    <div>
                        <h1 className='text-4xl font-bold drop-shadow-lg'>{name}</h1>
                        <h3 className='my-2 pt-4'>About</h3>
                        <p>{bio}</p>

                        <div className='flex gap-10 mt-8 text-xl'>
                            <div>
                                <p className='font-medium'>Recipes :
                                    <span className='font-normal text-gray-600 text-lg'> {recipes}</span></p>
                                <p className='font-medium'>Phone: <span className='font-normal text-gray-600 text-lg'>{phone}</span></p>
                            </div>

                            <div>
                                <p className='font-medium'>Experience :
                                    <span className='font-normal text-gray-600 text-lg'> {experience} Years</span></p>

                                <p className='font-medium'>Email:
                                    <span className='font-normal text-gray-600 text-lg'> {email}</span></p>
                            </div>
                        </div>

                        <p className='font-medium mt-3'>
                            <span className='text-secondary font-bold underline'>Best Recipe :</span> {best_recipe}
                        </p>
                    </div>
                    <div className='h-80 md:h-[480px] relative overflow-hidden'>
                        <img src={image_url} alt={name} />
                    </div>
                </div>
            </div>

            <div className="bg-cover bg-center py-28"
                style={{ backgroundImage: `url(${RecipeBg})` }} >
                <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto'>
                    <div className='text-center'>
                        <p className='text-white text-2xl mb-4'>Most of </p>
                        <h1 className='text-5xl text-secondary pb-20 font-bold'>{name}'s Recipe</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {
                            recipes_list.map((recipe, index) =>
                                <RecipeCard key={index} recipe={recipe} />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecipe;