import React from 'react';

// images
import Img1 from '../assets/images/recipe1.png';
import Img2 from '../assets/images/recipe2.png';
import Img3 from '../assets/images/recipe3.png';

const RecipeCategories = () => {
    return (
        <section className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto my-24'>
            <div className='text-center'>
                <p className='text-secondary text-2xl mb-4'>Choose a Category</p>
                <h1 className='text-5xl font-bold'>Recipe Categories</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                <div className='text-center shadow-lg p-4 rounded-lg'>
                    <img src={Img1} alt="" />

                    <h3 className='text-2xl  drop-shadow-xl'>Great Tea Assortment</h3>

                    <p className='text-lg text-gray-600 my-5'>
                        A selection of 200 types of tea, including limited edition collections
                    </p>

                    <button className='text-xl text-secondary'>View All</button>
                </div>

                <div className='text-center shadow-lg p-4 rounded-lg'>
                    <img src={Img2} alt="" />

                    <h3 className='text-2xl drop-shadow-xl'>
                        Spices & Additives
                    </h3>

                    <p className='text-lg text-gray-600 my-5'>
                        Tea House offers unique supreme tastes of the highest grades blends
                    </p>

                    <button className='text-xl text-secondary'>View All</button>
                </div>

                <div className='text-center shadow-lg p-4 rounded-lg'>
                    <img src={Img3} alt="" />

                    <h3 className='text-2xl drop-shadow-xl'>
                        Unique Accessories
                    </h3>

                    <p className='text-lg text-gray-600 my-5'>
                        We offer a wide range of unique and exquisite tea accessories
                    </p>

                    <button className='text-xl text-secondary'>View All</button>
                </div>
            </div>
        </section>
    );
};

export default RecipeCategories;