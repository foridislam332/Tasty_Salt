import React, { useContext, useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import ActiveLink from '../components/ActiveLink';
import { Link } from 'react-router-dom';

// icons
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Profile from '../components/Profile';

import Logo from '../assets/images/logo.png';
import LogoWhite from '../assets/images/logo-white.png';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 40) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-200 ease-in-out ${navState ? 'bg-white shadow-lg' : 'bg-[#00000070] text-white'}`}>

            {/* top bar */}
            <TopBar />

            <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto'>

                <nav className={`flex justify-between items-center py-2 relative transition-all duration-200 ease-in-out ${navState ? 'py-2' : 'py-5'}`}>
                    {/* Navbar Logo */}
                    <Link to="/" className='text-3xl'>
                        {
                            navState ? <img className='w-52' src={Logo} alt="tasty-salt" /> : <img className='w-52' src={LogoWhite} alt="tasty-salt" />
                        }
                    </Link>

                    {/* Navbar Toggle Button for small screens */}
                    <button
                        className="block md:hidden text-gray-900 focus:outline-none"
                        id="navbar-toggle"
                        onClick={toggleNavbar}
                    >
                        {
                            isOpen ? <MdClose />
                                : <FaBars />
                        }
                    </button>

                    {/* Navbar Links */}
                    <ul
                        className='hidden md:flex gap-10 text-darkGray'
                    >
                        <ActiveLink to="/">
                            Home
                        </ActiveLink>

                        <ActiveLink to="/all-chef">
                            Chef's
                        </ActiveLink>

                        <ActiveLink to="/recipes">
                            Recipes
                        </ActiveLink>

                        <ActiveLink to="/blog">
                            Blogs
                        </ActiveLink>
                    </ul>

                    {
                        user ? <Profile user={user} logOut={logOut} /> : <Link to='/login' className='hidden md:block btn_regular'>Login</Link>
                    }

                    {/* mobile menu */}
                    <ul
                        className={`flex flex-col gap-5 absolute h-screen p-8 top-0 bg-dark transition-all duration-300 ease-in-out bg-primary text-white z-50 ${isOpen ? "-left-4" : "-left-full"}`}
                    >
                        <ActiveLink to="/">
                            Home
                        </ActiveLink>

                        <ActiveLink to="/chef">
                            Chef's
                        </ActiveLink>

                        <ActiveLink to="/recipes">
                            Recipes
                        </ActiveLink>

                        <ActiveLink to="/blog">
                            Blogs
                        </ActiveLink>

                        <Link
                            to="/profile"
                            className="flex items-center text-gray-300 hover:text-primary transition-all duration-300 ease-in-out"
                        >
                            <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="https://i.pravatar.cc/300"
                                alt="User avatar"
                            />
                            <span className="ml-2 text-sm font-medium">{user?.displayName}</span>
                        </Link>

                        <button onClick={() => logOut()} className='btn_regular'>LogOut</button>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;