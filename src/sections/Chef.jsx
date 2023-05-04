import React from 'react';

import SingleChef from '../components/SingleChef';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
    const chefData = useLoaderData();
    return (
        <section className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto py-24'>
            <div className='text-center'>
                <p className='text-secondary text-2xl mb-4'>Team of Restaurant</p>
                <h1 className='text-5xl font-bold'>Our Experties Chef</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mt-10'>
                {
                    chefData.map(chef => <SingleChef
                        key={chef._id}
                        chef={chef}
                    />)
                }
            </div>
        </section>
    );
};

export default Chef;