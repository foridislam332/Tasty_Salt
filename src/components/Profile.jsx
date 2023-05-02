import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
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
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://i.pravatar.cc/300"
                    alt="User avatar"
                />
                <span className="ml-2 text-sm font-medium">John Doe</span>
            </Link>

            {/* Dropdown */}
            <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-lg z-10 transition-all duration-300 ease-in-out ${isHover ? 'top-full opacity-1' : 'top-24 opacity-0'}`}>
                <p
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                    Name
                </p>

                <p
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                    Email
                </p>

                <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                    LogOut
                </button>
            </div>
        </div>
    );
};

export default Profile;