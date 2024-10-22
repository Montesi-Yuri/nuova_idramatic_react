export default function Footer() {
    return (
        <>
            <footer className="p-4 max-w-7xl rounded-lg animate-fadeScaleOutIn mt-6 mx-1 xl:mx-auto sm:p-6 bg-neutral-800 text-start">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="https://flowbite.com" className="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nuova Idramatic</span>
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-8 md:gap-12">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contattaci</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-4">
                                        Via G. Brodolini, 7 - Castelplanio (An)
                                    </li>
                                    <li className="mb-4">
                                        <a href="tel:" className="hover:underline">0731811101</a>
                                    </li>
                                    <li>
                                        <a href="mailto:" className="hover:underline">info@nuovaidramatic.it</a>
                                    </li>
                                </ul>
                            </div>
                           
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Informazioni legali</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Termini &amp; Condizioni</a>
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
                           <span className="text-gray-400 text-sm">Realizzato da: Y.M logo</span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}