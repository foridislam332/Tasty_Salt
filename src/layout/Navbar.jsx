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
            <nav className={`py-2 relative transition-all duration-200 ease-in-out ${navState ? 'py-2' : 'py-5'}`}>
                <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto flex justify-between items-center'>
                    {/* Navbar Logo */}
                    <Link to="/" className='text-3xl'>
                        {
                            navState ? <img className='w-52' src={Logo} alt="tasty-salt" /> : <img className='w-52' src={LogoWhite} alt="tasty-salt" />
                        }
                    </Link>

                    {/* Navbar Toggle Button for small screens */}
                    <button
                        className="block md:hidden text-secondary focus:outline-none text-3xl"
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
                    <div onClick={() => setIsOpen(false)} className={`absolute md:hidden w-full h-screen top-0 left-0 bg-[#0000007b] transition-all duration-200 ease-in-out ${isOpen ? 'scale-100' : 'scale-0'}`}></div>
                    <ul
                        className={`flex flex-col gap-5 absolute w-64 h-screen p-8 top-0 bg-dark transition-all duration-300 ease-in-out bg-primary text-white z-50 ${isOpen ? "-left-4" : "-left-full"}`}
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

                        <div>
                            {
                                user?.photoURL ? <img
                                    className="h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]"
                                    src={user?.photoURL}
                                    alt="User avatar"
                                /> :
                                    <img
                                        className="h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]"
                                        src="https://i.pravatar.cc/300"
                                        alt="User avatar"
                                    />
                            }
                        </div>

                        <button onClick={() => logOut()} className='btn_regular logout'>LogOut</button>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;