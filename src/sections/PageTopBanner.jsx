import React from 'react';
import { Link } from 'react-router-dom';

import { TfiAngleDoubleRight } from "react-icons/tfi";

// images
import ChefRecipeBg from '../assets/images/chef-banner.jpg';

const PageTopBanner = ({ slag }) => {
    return (
        <section className="bg-cover bg-center h-[400px] flex items-center justify-center pt-28"
            style={{ backgroundImage: `url(${ChefRecipeBg})` }}
        >
            <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-7xl font-bold text-[#fcce9d] drop-shadow-xl'>{slag}</h1>

                    <div className='flex items-center justify-center gap-1 text-white'>
                        <Link to='/'>Home</Link>
                        <TfiAngleDoubleRight className='text-secondary ml-1' />
                        <span className='text-secondary'>{slag}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTopBanner;