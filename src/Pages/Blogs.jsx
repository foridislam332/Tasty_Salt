import React from 'react';
import PageTopBanner from '../sections/PageTopBanner';

const Blogs = () => {
    return (
        <>
            <PageTopBanner slag='Our Blogs' />
            <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto py-20'>
                <div className='text-right'>
                    <button className='btn_regular mb-10'>Download Blogs PDF</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='shadow-xl p-4 rounded-lg hover:shadow-[#f891236c] transition-all duration-300 ease-in-out'>
                        <h2 className='text-2xl mb-2'><span className='font-semibold'>Question : </span> Tell us the differences between uncontrolled and controlled components.</h2>

                        <p> <span className='text-secondary font-semibold text-xl'>Answer : </span> Tell us the differences between uncontrolled and controlled components.Tell us the differences between uncontrolled and controlled components.</p>
                    </div>
                    <div className='shadow-xl p-4 rounded-lg hover:shadow-[#f891236c] transition-all duration-300 ease-in-out'>
                        <h2 className='text-2xl mb-2'><span className='font-semibold'>Question : </span> Tell us the differences between uncontrolled and controlled components.</h2>

                        <p> <span className='text-secondary font-semibold text-xl'>Answer : </span> Tell us the differences between uncontrolled and controlled components.Tell us the differences between uncontrolled and controlled components.</p>
                    </div>
                    <div className='shadow-xl p-4 rounded-lg hover:shadow-[#f891236c] transition-all duration-300 ease-in-out'>
                        <h2 className='text-2xl mb-2'><span className='font-semibold'>Question : </span> Tell us the differences between uncontrolled and controlled components.</h2>

                        <p> <span className='text-secondary font-semibold text-xl'>Answer : </span> Tell us the differences between uncontrolled and controlled components.Tell us the differences between uncontrolled and controlled components.</p>
                    </div>
                    <div className='shadow-xl p-4 rounded-lg hover:shadow-[#f891236c] transition-all duration-300 ease-in-out'>
                        <h2 className='text-2xl mb-2'><span className='font-semibold'>Question : </span> Tell us the differences between uncontrolled and controlled components.</h2>

                        <p> <span className='text-secondary font-semibold text-xl'>Answer : </span> Tell us the differences between uncontrolled and controlled components.Tell us the differences between uncontrolled and controlled components.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;