import React from 'react';

// images
import HeroBg from '../assets/images/hero-bg.jpg';
const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: `url(${HeroBg})` }}
        >
            <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto'>
                <div className='mt-24'>
                    <h4 className='text-secondary text-xl'>Welcome To Tasty Salt</h4>

                    <h1 className='text-4xl md:text-7xl font-bold my-8 text-[#fcce9d]'>Find Your Favorite <br /> Tasty Food</h1>

                    <p className='text-gray-300'>Creative space for food and recipes where you will find healthy culinary inspiration.</p>

                    <button className='btn_regular mt-16'>DIscover More</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;