import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import Logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className='bg-[#222D3B]'>
            <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-center py-20'>
                    <div>
                        <h1 className='text-3xl font-semibold mb-4 text-white'>Subscribe</h1>
                        <p className='text-gray-300 mb-5'>Register and get notified about all the news & updates before it gets too late.</p>

                        <div className='flex box-border w-full'>
                            <input className='pl-4 w-full outline-secondary' type="text" placeholder='Your email address' />
                            <button className='btn_regular w-52'>Subscribe</button>
                        </div>
                    </div>

                    <div>
                        <Link to='/' className='text-3xl font-semibold'>
                            <img className='w-56 m-auto' src={Logo} alt="tasty-salt" />
                        </Link>
                        <p className='text-gray-300 my-8'>Be the first to know about new collections, special events, and what’s going on at Our Place</p>
                        <div className="flex items-center justify-center text-white text-2xl">
                            {/* Social Icons */}
                            <Link to="/" className="mr-4">
                                <FaFacebookF />
                            </Link>
                            <Link to="/" className="mr-4">
                                <FaTwitter />
                            </Link>
                            <Link to="/" className="mr-4">
                                <FaInstagram />
                            </Link>
                            <Link to="/" className="mr-4">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-3xl font-semibold mb-4 text-white'>Contact Us</h1>
                        <p className='text-gray-300 mb-2'>Tasty Salt Restaurant & Fine dining, <br /> 71 Madison Ave, New York, USA</p>
                        <p className='text-gray-300 mb-2'>+39-055-123456,+39-066-666999</p>
                        <p className='text-gray-300'>forid.tasty@salt.com</p>
                    </div>
                </div>

                {/* footer bottom */}
                <div className='border-t border-black flex flex-col md:flex-row items-center justify-between py-5 text-gray-300'>
                    <p>@Copyright by Tasty Salt-2023, All Right Reserved.</p>

                    <div>
                        <Link to='/'>Privacy & Policy</Link>
                        |
                        <Link to='/'>Terms and Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;