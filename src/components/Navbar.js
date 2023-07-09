import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black bg-opacity-70 py-4">
            <div className="container mx-auto pr-4 flex justify-end items-center">
                <div className="sm:hidden">
                    <button
                        className="text-white hover:text-gray-300 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.293 4.293L12 11.586 4.707 4.293 3.293 5.707 11.586 14 3.293 22.293 4.707 23.707 12 16.414 19.293 23.707 20.707 22.293 13.414 14 20.707 6.707 19.293 5.293 12 12.586 4.707 5.293 3.293 6.707z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } sm:flex sm:space-x-4`}
                >
                    <HashLink
                        smooth
                        to="/"
                        className="block sm:inline-block text-blue-500 hover:text-gray-300 font-medium transition duration-300"
                    >
                        Home
                    </HashLink>
                    <HashLink
                        smooth
                        to="/#staff"
                        className="block sm:inline-block text-blue-500 hover:text-gray-300 font-medium transition duration-300"
                    >
                        Staff
                    </HashLink>
                    <HashLink
                        smooth
                        to="/signup-and-prices"
                        className="block sm:inline-block text-blue-500 hover:text-gray-300 font-medium transition duration-300"
                    >
                        Sign Up Form/Prices
                    </HashLink>
                    <HashLink
                        smooth
                        to="/locations-shedule"
                        className="block sm:inline-block text-blue-500 hover:text-gray-300 font-medium transition duration-300"
                    >
                        Locations / Schedule
                    </HashLink>
                    <HashLink
                        smooth
                        to="/parent-testimonies"
                        className="block sm:inline-block text-blue-500 hover:text-gray-300 font-medium transition duration-300"
                    >
                        Testimony & Gallery
                    </HashLink>
                    <HashLink
                        smooth
                        to="/faq"
                        className="block sm:inline-block text-blue-500 hover:text-gray-300 font-medium transition duration-300"
                    >
                        FAQ
                    </HashLink>
                    <HashLink
                        smooth
                        to="/#contact"
                        className="block sm:inline-block text-blue-500 hover:text-gray-300 font-medium transition duration-300"
                    >
                        Contact
                    </HashLink>
                    <HashLink
                        smooth
                        to="/events"
                        className="block sm:inline-block text-blue-500 hover:text-gray-300 font-medium transition duration-300"
                    >
                        Events
                    </HashLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
