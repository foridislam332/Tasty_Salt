import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "block font-medium text-secondary text-lg"
                    : "block font-medium text-lg"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;