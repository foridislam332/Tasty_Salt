import React from 'react';

import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';

const SingleChef = ({ chef }) => {
    const { _id, name, image_url, experience, recipes } = chef;
    return (
        <div className='shadow-xl p-4 rounded-lg bg-[#222D3B]
                transition-all duration-300 ease-in-out hover:shadow-[#222d3b80]
                '>
            <img src='https://i.ibb.co/zGRbcCf/icon-01-370x370.png' alt={name} />

            <h3 className='text-2xl text-secondary drop-shadow-xl mb-5'>{name}</h3>

            <p className='text-lg text-gray-400'>
                {experience} Years of experience
            </p>

            <p className='text-white mb-8'>{recipes} Recipes</p>
            <div className='flex items-center justify-between'>
                <p className='flex items-center gap-2 text-2xl text-secondary'><BiLike className='cursor-pointer' /> 01</p>
                <Link to={`/chef/${_id}`} className='btn_regular'>View Recipes</Link>
            </div>
        </div>
    );
};

export default SingleChef;