import React from 'react';
import { Link } from 'react-router-dom';

import { FaAngleRight } from "react-icons/fa";

// images
import ChefRecipeBg from '../assets/images/chef-banner.jpg';

const ChefRecipeBanner = () => {
    return (
        <section className="bg-cover bg-center h-[400px] flex items-center justify-center pt-28"
            style={{ backgroundImage: `url(${ChefRecipeBg})` }}
        >
            <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-7xl font-bold text-[#fcce9d] drop-shadow-xl'>Chef Recipes</h1>

                    <div className='flex items-center justify-center gap-3 text-white'>
                        <Link to='/'>Home</Link>
                        <FaAngleRight />
                        <span className='text-secondary'>Chef Recipes</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecipeBanner;