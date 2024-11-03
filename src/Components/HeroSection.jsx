import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

// Importa i file CSS di Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HeroSection() {
    return (
        <section className='max-w-7xl mx-auto px-1 slide-in-fwd-center mt-2 md:mt-6'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={0} // Spazio tra le slide
                slidesPerView={1}  // Numero di slide visibili per volta
                navigation={window.innerWidth >= 768 ? true : false}      // Attiva frecce di navigazione
                pagination={{ clickable: true }} // Attiva la paginazione cliccabile
                loop={true}     // Abilita lo scorrimento continuo
                autoplay={{ delay: 4000, disableOnInteraction: false }}
            >
                <SwiperSlide>
                    <div className='flex relative max-h-[500px] min-[300px]:'>
                        <img className='object-cover h-full relative top-0 start-0 w-full' src="https://content.fordpro.com/content/dam/fordpro/it/images/service/desktop/fordfront-service-1.jpg" alt="Slide 1" loading='lazy' />
                        <div className="absolute h-full w-full opacity-70 bg-black"></div>
                        <div className="text-white absolute z-10 top-0 start-0 w-full h-full p-6 md:p-16" >
                            <h2 className="mb-6 text-xl font-bold md:text-5xl">
                                Mantieni i tuoi veicoli sempre in ordine e in piena operatività.
                            </h2>
                            <p className="mb-6 text-sm text-text sm:text-xl md:mb-10 lg:mb-12">
                                Servizi specializzati per manutenzione e riparazioni di tutti i veicoli industriali e commerciali.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="px-4 py-2 bg-accent text-gray-800 rounded-md font-semibold">Prenota un appuntamento</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='max-h-[500px] overflow-hidden'>
                        <div className='flex h-100 relative'>
                            <img className='object-cover h-full -mt-5' src="https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2019/04/2019_ford_tourneo_custom_phev_01.jpg" alt="Slide 2" loading='lazy' />
                            <div className="absolute h-full w-full opacity-70 bg-black"></div>
                            <div className="text-white absolute z-10 top-0 start-0 w-full h-full p-6 md:p-16" >
                                <h2 className="mb-6 text-xl font-bold md:text-5xl">
                                    Sei alla ricerca di un furgone 9 posti per il tuo lavoro o per la tua famiglia?
                                </h2>
                                <p className="mb-6 text-sm text-text sm:text-xl md:mb-10 lg:mb-12">
                                    Abbiamo a disposizione una vasta scelta di veicoli che possono fare al tuo caso.
                                </p>
                                <div className="flex justify-center gap-4">
                                    <button className="px-4 py-2 bg-secondary text-gray-800 rounded-md font-semibold">Vedi veicoli disponibili</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-h-[500px] overflow-hidden'>
                        <div className='flex h-100 relative'>
                            <img className='object-cover h-full' src='https://www.sicurauto.it/wp-content/uploads/2024/09/Camion-in-officina-durante-i-controlli-tecnici-di-revisione-e1726650064194.jpg' alt="Slide 3" loading='lazy' />
                            <div className="absolute h-full w-full opacity-70 bg-black"></div>
                            <div className="text-white absolute z-10 top-0 start-0 w-full h-full p-6 md:p-16" >
                                <h2 className="mb-4 text-xl font-bold md:text-5xl">
                                    Revisioni per tutti i veicoli al di sopra dei 35 quintali in sede
                                </h2>
                                <p className="mb-6 text-sm text-text sm:text-xl md:mb-10 lg:mb-12">
                                    La Nuova Idramatic esegue revisioni, collaudi e trasformazioni in sede di veicoli industriali, commerciali, macchine operatrici e molto altro.
                                </p>
                                <div className="flex justify-center gap-4">
                                    <button className="px-4 py-2 bg-secondary text-gray-800 rounded-md font-semibold">Contattaci per maggiori informazioni</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};