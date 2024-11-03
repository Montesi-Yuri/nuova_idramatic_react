import { FaPhone, FaEnvelope } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
    return (
        <>
            <footer className="p-4 max-w-7xl rounded-lg slide-in-fwd-center mt-6 mx-1 xl:mx-auto sm:p-6 bg-gray-100 text-start shadow-lg relative z-10">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <a href="https://flowbite.com" className="flex items-center">
                                <Logo classes={'max-w-sm'} />
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-8 md:gap-12">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Contattaci</h2>
                                <ul className="text-gray-600 ">
                                    <li className="mb-4 flex items-center">
                                        <FaEnvelope className="inline-block mr-2" />
                                        Via G. Brodolini, 7 - Castelplanio (An)
                                    </li>
                                    <li className="mb-4 flex items-center">
                                        <FaPhone className="inline-block mr-2" />
                                        <a href="tel:073181110" className="hover:underline">0731811101</a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@nuovaidramatic.it" className="hover:underline">info@nuovaidramatic.it</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Informazioni legali</h2>
                                <ul className="text-gray-600">
                                    <li className="mb-4">
                                        <a href="#!" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="hover:underline">Termini &amp; Condizioni</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com" className="hover:underline">Nuova Idramatic™</a>
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <span className="text-gray-400 text-sm">Realizzato da: Y.M.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}