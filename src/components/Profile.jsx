import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                className={`absolute right-0 mt-2 min-w-48 bg-white shadow-lg origin-top-right transition-all duration-300 ease-in-out ${isHover ? 'top-full scale-100' : 'top-12 scale-0'}`}>
                <p
                    to="/"
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                >
                    {user?.displayName}
                </p>

                <p
                    to="/"
                    className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                    Email: {user?.email}
                </p>

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