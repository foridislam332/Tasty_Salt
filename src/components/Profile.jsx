import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaPencilAlt } from "react-icons/fa";

const Profile = ({ user, logOut }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className="ml-4 relative profile hidden md:block"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Link
                to="/profile"
                className="flex items-center text-gray-300 hover:text-primary transition-all duration-300 ease-in-out"
            >
                <img
                    className="h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]"
                    src={user?.photoURL}
                    alt="User avatar"
                />
            </Link>

            {/* Dropdown */}
            <div
                className={`absolute right-0 mt-2 max-w-xs min-w-[200px] bg-white shadow-lg origin-top-right transition-all duration-300 ease-in-out ${isHover ? 'top-full scale-100' : 'top-12 scale-0'}`}>
                <p
                    to="/"
                    className="relative block w-full px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 z-10"
                >
                    {user?.displayName}
                    <Link to='/edit' className='absolute top-0 right-0 bg-secondary p-2 rounded-full z-40 m-1 hover:shadow-lg hover:shadow-secondary transition-all duration-300 ease-in-out'>
                        <FaPencilAlt className='text-xs text-white' />
                    </Link>
                </p>

                {
                    user.email && <p
                        to="/"
                        className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Email: <br /> {user.email}
                    </p>
                }

                <button
                    className="w-full btn_regular text-red-600 mt-3 logout"
                    onClick={() => logOut()}
                >
                    LogOut
                </button>
            </div>
        </div>
    );
};

export default Profile;