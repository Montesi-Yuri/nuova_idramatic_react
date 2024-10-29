import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Logo from './Logo';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" bg-gray-100 text-text lg:sticky top-1 relative z-10 border-gray-600 border-2 rounded-lg animate-fadeScaleOutIn max-w-7xl mx-1 xl:mx-auto ">
            <nav className="mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
                <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:py-4 xl:px-8">
                    <a href="#!" className='text-text '>
                        <Logo classes={'h-26'} />
                    </a>
                    <div className='flex flex-wrap gap-6'>
                        <div
                            className={`mt-14 flex flex-col space-y-8 lg:flex-grow lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
                        >
                            <a
                                href="#!"
                                className="text-text text-lg rounded-lg lg:px-6 lg:py-4 lg:hover:scale-110 lg:hover:underline"
                            >
                                Home
                            </a>
                            <a
                                href="#!"
                                className="text-text text-lg rounded-lg lg:px-6 lg:py-4 lg:hover:scale-110 lg:hover:underline"
                            >
                                Servizi
                            </a>
                            <a
                                href="#!"
                                className="text-text text-lg rounded-lg pb-8 lg:px-6 lg:py-4 lg:hover:scale-110 lg:hover:underline"
                            >
                                Contatti
                            </a>
                        </div>
                        <div
                            className={`flex items-center gap-3 lg:flex  ${isOpen ? "" : "hidden"}`}
                        >
                            <a href="#!">
                                <FaInstagram className='w-8 h-8 text-gray-900 hover:scale-110 hover:text-[#c1355f] transition-all duration-400' />
                            </a>
                            <a href="#!">
                                <FaFacebook className='w-8 h-8 text-gray-900 hover:scale-110 hover:text-blue-800 transition-all duration-400' />
                            </a>
                        </div>
                    </div>
                    <button
                        className="absolute top-[24px] bg-gray-200 rounded-md p-1 right-5 lg:hidden"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.75 12H20.25"
                                stroke="#160042"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M3.75 6H20.25"
                                stroke="#160042"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M3.75 18H20.25"
                                stroke="#160042"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}