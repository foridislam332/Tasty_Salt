import React from 'react';
import Chef from '../sections/Chef';
import PageTopBanner from '../sections/PageTopBanner';

const AllChef = () => {
    return (
        <div>
            <PageTopBanner slag={'All Chef'} />
            <Chef />
        </div>
    );
};

export default AllChef;