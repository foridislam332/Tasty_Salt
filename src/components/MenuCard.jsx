import React from 'react';

const MenuCard = ({ item }) => {
    const { name, img_url, description } = item;
    return (
        <div className='flex items-center gap-5'>
            <img className='w-28 rounded-full shadow-lg shadow-secondary' src={img_url} alt={name} />
            <div>
                <h2 className='text-2xl font-medium'>{name}</h2>
                <p className='text-gray-500 mt-2'>{description}</p>
            </div>
        </div>
    );
};

export default MenuCard;