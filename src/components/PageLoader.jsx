import React from 'react';
import { Triangle } from 'react-loader-spinner';

const PageLoader = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <Triangle
                height="100"
                width="100"
                color="#f89223"
                ariaLabel="triangle-loading"
                visible={true}
            />
        </div>
    );
};

export default PageLoader;