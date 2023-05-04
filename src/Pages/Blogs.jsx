import React from 'react';
import PageTopBanner from '../sections/PageTopBanner';
import BlogBody from '../components/BlogBody';

const Blogs = () => {
    return (
        <div id='component-to-download'>
            <PageTopBanner slag='Our Blogs' />
            <BlogBody />
        </div>
    );
};

export default Blogs;