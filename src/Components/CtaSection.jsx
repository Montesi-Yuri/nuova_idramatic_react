export default function CtaSection() {
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6 flex flex-wrap justify-between items-center">
                <div className="mt-8 max-w-xl mx-auto">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Contattaci</h2>
                    <p className="mb-4 text-gray-700 text-xl">Puoi contattarci tramite email, telefono o compilando il form sottostante:</p>
                    <form className="mt-8 ">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-start"><span className="text-red-500">*</span> Nome</label>
                                <input type="text" name="name" id="name" autoComplete="given-name" className="mt-1 p-2 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-start"><span className="text-red-500">*</span> Email</label>
                                <input type="email" name="email" id="email" autoComplete="email" className="mt-1 p-2 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="oggetto" className="block text-sm font-medium text-gray-700 text-start"><span className="text-red-500">*</span> Oggetto</label>
                                <input type="text" name="oggetto" id="oggetto" className="mt-1 p-2 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-start"><span className="text-red-500">*</span> Messaggio</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="px-4 py-2.5 text-base font-medium text-black bg-accent rounded-lg hover:bg-primary-800 focus:ring-4">
                                    Invia messaggio
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex items-end p-6 mx-auto">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.208754936928!2d13.111434312330235!3d43.49983207098936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132da33065d548a9%3A0x518df2a7425b08c2!2sNuova%20Idramatic!5e1!3m2!1sen!2sit!4v1728221402760!5m2!1sen!2sit" width="500" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </section>
    )
}