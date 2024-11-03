import CountUp from 'react-countup';

export default function AboutUsSection() {
    return (
        <>
            <section id='aboutUs' className="my-8 px-4 py-8 mx-auto lg:py-16 lg:px-6 text-gray-800 slide-in-fwd-center ">
                <div className='mb-16 max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap items-center'>
                    <div className="w-full lg:w-3/5 text-start">
                        <h2 className="text-4xl font-bold mb-4 text-black flex flex-wrap items-center gap-2">
                            La nostra storia
                        </h2>
                        <p className="mb-4">
                            <strong>Nuova Idramatic</strong> nasce a <strong>Castelplanio a fine anni '90</strong> come una piccola officina meccanica specializzata nella <strong>riparazione di veicoli industriali</strong>.
                            Fondata da un gruppo di tecnici appassionati, l'officina si è subito distinta per l'<strong>attenzione alla qualità</strong> dei servizi offerti e la capacità di risolvere anche i problemi più complessi.
                        </p>
                        <p className="mb-4">
                            Nel corso degli anni, grazie all'impegno e alla dedizione dei suoi fondatori, <strong>Nuova Idramatic ha ampliato le proprie competenze e strutture</strong>. Negli <strong>anni 2000</strong>, ha integrato <strong>tecnologie all'avanguardia</strong> nel settore oleodinamico, diventando un <strong>punto di riferimento</strong> per la riparazione e la manutenzione di <strong>sistemi idraulici</strong> su mezzi pesanti e veicoli industriali.
                        </p>
                        <p className="mb-4">
                            Oggi, l'officina è cresciuta fino a diventare un <strong>centro specializzato</strong> con una squadra di <strong>tecnici altamente qualificati</strong>. Non solo si occupa di <strong>riparazioni meccaniche e oleodinamiche</strong>, ma offre anche servizi di <strong>revisione, manutenzione preventiva</strong> e <strong>noleggio veicoli</strong>, garantendo un supporto completo ai clienti. Grazie alla fiducia costruita negli anni, <strong>Nuova Idramatic</strong> continua a essere un <strong>partner affidabile</strong> per le imprese locali e nazionali, mantenendo sempre come priorità la <strong>qualità e la soddisfazione del cliente</strong>.
                        </p>
                    </div>

                    <div className="w-full lg:w-2/5 lg:pl-8 mt-8 lg:mt-0 ">
                        <img src="https://images.unsplash.com/photo-1650569663281-44a28c984e2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Immagine rappresentativa della storia" className="rounded-lg w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            <section className='mx-4'>
                <div className=" flex flex-wrap justify-around py-8 mb-16 max-w-7xl mx-auto shadow-lg p-4 rounded-lg bg-neutral-100">
                    <div className="text-center w-full mb-12 md:w-auto md:mb-0  ">
                        <h2 className="text-5xl font-bold text-accent">
                            <CountUp start={0} end={25} duration={3.0} suffix="+" /> {/* 25 anni di attività */}
                        </h2>
                        <p className="text-xl text-gray-800 font-semibold mt-2">Anni di attività</p>
                    </div>
                    <div className="text-center w-full mb-12 md:w-auto md:mb-0 ">
                        <h2 className="text-5xl font-bold text-accent">
                            <CountUp start={0} end={2000} duration={3.0} /> {/* 10.000 veicoli riparati */}
                        </h2>
                        <p className="text-xl text-gray-800 font-semibold mt-2">Veicoli riparati annualmente</p>
                    </div>
                    <div className="text-center w-full mb-12 md:w-auto md:mb-0 ">
                        <h2 className="text-5xl font-bold text-accent">
                            <CountUp start={0} end={98} duration={3.0} suffix="%" /> {/* 98% clienti soddisfatti */}
                        </h2>
                        <p className="text-xl text-gray-800 font-semibold mt-2">Clienti soddisfatti</p>
                    </div>
                    <div className="text-center w-full md:w-auto">
                        <h2 className="text-5xl font-bold text-accent">
                            <CountUp start={0} end={235} duration={3.0} /> {/* 500 interventi annuali */}
                        </h2>
                        <p className="text-xl text-gray-800 font-semibold mt-2">Interventi sul posto</p>
                    </div>
                </div>
            </section>


            <section className="bg-black bg-opacity-30">
                <div className="py-8 px-4 lg:mx-auto max-w-7xl lg:py-16 text-start">
                    <div className="mx-auto mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">Il nostro team</h2>
                        <h4 className="font-light text-gray-300 lg:mb-16 text-xl">
                            Scopri il nostro team di meccanici esperti, pronti a risolvere ogni problema con professionalità e competenza.
                        </h4>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-start bg-gray-100 rounded-lg shadow sm:flex">
                            <a href="#!">
                                <img className="w-full md:mt-5 rounded-lg sm:rounded-none sm:rounded-l-lg md:rounded-full md:ms-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-2xl font-bold tracking-tight text-black">
                                    <a href="#!">Bonnie Green</a>
                                </h3>
                                <span className="text-blue-500 font-semibold">Responsabile Officina</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 text-lg">
                                    Bonnie coordina il team e garantisce che ogni intervento di riparazione e manutenzione venga eseguito con la massima precisione.
                                </p>
                            </div>
                        </div>
                        <div className="items-start bg-gray-100 rounded-lg shadow sm:flex">
                            <a href="#!">
                                <img className="md:mt-5 w-full rounded-lg sm:rounded-none sm:rounded-l-lg md:rounded-full md:ms-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-2xl font-bold tracking-tight text-black">
                                    <a href="#!">Jese Leos</a>
                                </h3>
                                <span className="text-blue-500 font-semibold">Tecnico Senior</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 text-lg">
                                    Jese è specializzato nella diagnosi e risoluzione dei guasti più complessi, con anni di esperienza nel settore della meccanica pesante.
                                </p>
                            </div>
                        </div>
                        <div className="items-start bg-gray-100 rounded-lg shadow sm:flex">
                            <a href="#!">
                                <img className="md:mt-5 w-full rounded-lg sm:rounded-none sm:rounded-l-lg md:rounded-full md:ms-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-2xl font-bold tracking-tight text-black">
                                    <a href="#!">Michael Gough</a>
                                </h3>
                                <span className="text-blue-500 font-semibold">Esperto in Manutenzione</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 text-lg">
                                    Michael si occupa di manutenzione preventiva e di routine, assicurando che i veicoli siano sempre in perfette condizioni.
                                </p>
                            </div>
                        </div>
                        <div className="items-start bg-gray-100 rounded-lg shadow sm:flex">
                            <a href="#!">
                                <img className="md:mt-5 w-full rounded-lg sm:rounded-none sm:rounded-l-lg md:rounded-full md:ms-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="Thomas Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-2xl font-bold tracking-tight text-black">
                                    <a href="#!">Thomas Lean</a>
                                </h3>
                                <span className="text-blue-500 font-semibold">Specialista in Diagnostica Elettronica</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 text-lg">
                                    Thomas è esperto nell'analisi e nella riparazione dei sistemi elettronici dei veicoli, assicurando che tutte le componenti siano perfettamente calibrate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
