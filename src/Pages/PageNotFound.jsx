import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div className='h-[80vh] flex items-center justify-center flex-col pt-28'>
                <img className='w-52 mb-5' src="https://i.ibb.co/gdj4BdC/404.jpg" alt="404" />
                <Link to='/' className='btn_regular'>Back to Home</Link>
            </div>
        </div>
    );
};

export default PageNotFound;