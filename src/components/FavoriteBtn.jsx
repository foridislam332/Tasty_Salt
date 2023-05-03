import React, { useState } from 'react';

import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";
import swal from 'sweetalert';

const FavoriteBtn = ({ count }) => {
    const [favorite, setFavorite] = useState(count);

    const handlefavorite = () => {
        setFavorite(count + 1);
        swal("Good job!", "Recipe Favorite done!", "success");
    }
    return (
        <button onClick={handlefavorite} className='ml-16 flex' title='Favorite'>
            <span>{favorite}</span>
            {
                count === favorite ? <RiHeartAddLine className='text-3xl text-red-500' /> : <RiHeartFill className='text-3xl text-red-500' />
            }
        </button>
    );
};

export default FavoriteBtn;