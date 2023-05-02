import React from "react";
import { Link } from "react-router-dom";

// icons
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRegEnvelope } from "react-icons/fa";

import { FiMapPin } from "react-icons/fi";

const TopBar = () => {
    return (
        <div className="bg-primary text-white">
            <div className="container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    {/* Social Icons */}
                    <Link to="/" className="mr-4">
                        <FaFacebookF className="text-white" />
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

                <div className="md:flex gap-4 py-3">
                    {/* Email and Phone */}
                    <p className="text-sm flex items-center gap-2">
                        <FaRegEnvelope className="text-secondary text-lg" />
                        info@example.com</p>
                    <p className="text-sm flex items-center gap-2">
                        <FiMapPin className="text-secondary text-lg" />
                        Road-01, Block-B, West London City</p>
                </div>
            </div>
        </div>
    );
};

export default TopBar;