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

                        <p> <span className='text-secondary font-semibold text-xl'>Answer : </span> In the context of web development, uncontrolled and controlled components refer to different approaches for managing form inputs in React.js.</p>
                    </div>
                    <div className='shadow-xl p-4 rounded-lg hover:shadow-[#f891236c] transition-all duration-300 ease-in-out'>
                        <h2 className='text-2xl mb-2'><span className='font-semibold'>Question : </span> How to validate React props using PropTypes?</h2>

                        <p> <span className='text-secondary font-semibold text-xl'>Answer : </span> React provides a package called "PropTypes" that can be used to validate the props of the component. PropTypes are used to define the types and shape of a component expects.</p>
                    </div>
                    <div className='shadow-xl p-4 rounded-lg hover:shadow-[#f891236c] transition-all duration-300 ease-in-out'>
                        <h2 className='text-2xl mb-2'><span className='font-semibold'>Question : </span> Tell us the difference between nodejs and express js.</h2>

                        <p> <span className='text-secondary font-semibold text-xl'>Answer : </span> Node.js and Express.js are both widely used technologies in web development, but they serve different purposes.</p>

                        <p className='my-2'>Node.js is a runtime environment for executing JavaScript code on the server side.</p>

                        <p>Express.js, on the other hand, is a web framework built on top of Node.js.</p>
                    </div>
                    <div className='shadow-xl p-4 rounded-lg hover:shadow-[#f891236c] transition-all duration-300 ease-in-out'>
                        <h2 className='text-2xl mb-2'><span className='font-semibold'>Question : </span> What is a custom hook, and why will you create a custom hook?</h2>

                        <p> <span className='text-secondary font-semibold text-xl'>Answer : </span> A custom hook is a reusable function in React that logic and can be shared between components. Custom hooks are a way to extract repeated logic from components and reuse it in a more concise and reusable way. Custom hooks are created using the same syntax as regular hooks, but with a custom name and implementation..</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;