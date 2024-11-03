import { useState } from 'react';
import { FaFacebook, FaInstagram, FaHome, FaServicestack, FaMonument, FaPhoneAlt } from 'react-icons/fa';
import Logo from './Logo';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const scrollOffset = 200; // Adjust this value according to your needs
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const scrollPosition = elementPosition - scrollOffset;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            // console.log('scrolling to:', id, 'position:', scrollPosition);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className=" bg-gray-100 text-text lg:sticky top-1 relative z-10 border-gray-600 border-2 rounded-lg slide-in-elliptic-top-fwd max-w-7xl mx-1 xl:mx-auto ">
            <nav className="mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
                <div className="w-full flex lg:justify-between flex-wrap lg:flex-nowrap md:px-6 py-6 lg:py-4 xl:px-8">

                    <div className='w-full lg:w-auto flex justify-between items-center me-6'>
                        <a href="javascript:void(0)" onClick={scrollToTop} className='text-text'>
                            <Logo classes={'h-26'} />
                        </a>

                        <button
                            className="bg-gray-200 rounded-md p-1 lg:hidden w-min"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.75 12H20.25"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M3.75 6H20.25"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M3.75 18H20.25"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-wrap gap-2 md:gap-6 px-4 md:px-0'>
                        <div
                            className={`mt-14 flex flex-col space-y-8 w-full lg:w-auto lg:flex-grow lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 transform transition-all duration-300 ease-in-out ${isOpen ? "" : "hidden"}`}
                        >
                            <a
                                href="#!"
                                className="text-text text-lg rounded-lg lg:px-3 lg:py-4 lg:hover:scale-110 lg:hover:underline transition-all duration-400 flex items-center gap-2"
                                onClick={scrollToTop}
                            >
                                <FaHome className='w-4 h-4 text-gray-900' />
                                Home
                            </a>
                            <a
                                href="#!"
                                className="text-text text-lg rounded-lg lg:px-3 lg:py-4 lg:hover:scale-110 lg:hover:underline transition-all duration-400 flex items-center gap-2"
                                onClick={() => scrollToElement('services')}
                            >
                                <FaServicestack className='w-4 h-4 text-gray-900' />
                                Servizi
                            </a>
                            <a
                                href="#!"
                                className="text-text text-lg rounded-lg lg:px-3 lg:py-4 lg:hover:scale-110 lg:hover:underline transition-all duration-400 flex items-center gap-2"
                                onClick={() => scrollToElement('aboutUs')}
                            >
                                <FaMonument className='w-4 h-4 text-gray-900' />
                                Chi siamo
                            </a>
                            <a
                                href="#!"
                                className="text-text text-lg rounded-lg pb-8 lg:px-3 lg:py-4 lg:hover:scale-110 lg:hover:underline transition-all duration-400 flex items-center gap-2"
                                onClick={() => scrollToElement('contacts')}
                            >
                                <FaPhoneAlt className='w-4 h-4 text-gray-900' />
                                Contatti
                            </a>
                        </div>
                        <div
                            className={`flex items-center gap-3 lg:inline my-auto xl:flex  ${isOpen ? "" : "hidden"}`}
                        >
                            <a target="_blank" href="https://www.instagram.com/nuovaidramatic/">
                                <FaInstagram className='w-8 h-8 text-gray-900 hover:scale-110 hover:text-[#c1355f] transition-all duration-400' />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=61564983429649">
                                <FaFacebook className='w-8 h-8 text-gray-900 hover:scale-110 hover:text-blue-800 transition-all duration-400' />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
}