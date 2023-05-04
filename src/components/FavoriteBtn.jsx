import React, { useState } from 'react';

import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";
import { toast } from 'react-toastify';

const FavoriteBtn = ({ count }) => {
    const [favorite, setFavorite] = useState(count);

    const handleFavorite = () => {
        setFavorite(count + 1);
        if (count < favorite) {
            toast.success("Already favorite !", {
                position: "top-center",
                autoClose: 3000,
            })
        } else {
            toast.success("Favorite added Done !", {
                position: "top-center",
                autoClose: 3000,
            })
        }
    }
    return (
        <button onClick={handleFavorite} className='ml-16 flex' title='Favorite'>
            <span>{favorite}</span>
            {
                count === favorite ? <RiHeartAddLine className='text-3xl text-red-500' /> : <RiHeartFill className='text-3xl text-red-500' />
            }
        </button>
    );
};

export default FavoriteBtn;