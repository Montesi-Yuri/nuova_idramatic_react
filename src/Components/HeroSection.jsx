import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

// Importa i file CSS di Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HeroSection() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contacts');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='max-w-7xl mx-auto px-1 slide-in-fwd-center mt-2 md:mt-6'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={window.innerWidth >= 768 ? true : false}
                pagination={{ 
                    clickable: true,
                }}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="relative pb-10"
            >
                <SwiperSlide>
                    <div className='h-[500px] relative'>
                        <img className='w-full h-full object-cover' src="https://content.fordpro.com/content/dam/fordpro/it/images/service/desktop/fordfront-service-1.jpg" alt="Slide 1" loading='lazy' />
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="text-white absolute z-10 inset-0 p-6 md:p-16 flex flex-col justify-center items-center text-center">
                            <h2 className="mb-6 text-3xl font-bold md:text-5xl max-w-4xl">
                                Mantieni i tuoi veicoli sempre in ordine e in piena operatività.
                            </h2>
                            <p className="mb-6 text-xl text-gray-300 text-text sm:text-xl md:mb-10 lg:mb-12 max-w-3xl">
                                Servizi specializzati per manutenzione e riparazioni di tutti i veicoli industriali e commerciali.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button 
                                    onClick={scrollToContact}
                                    className="px-4 py-2 bg-secondary text-gray-800 rounded-md font-semibold hover:bg-secondary/80 transition-colors cursor-pointer"
                                >
                                    Prenota un appuntamento
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[500px] relative'>
                        <img className='w-full h-full object-cover' src="https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2019/04/2019_ford_tourneo_custom_phev_01.jpg" alt="Slide 2" loading='lazy' />
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="text-white absolute z-10 inset-0 p-6 md:p-16 flex flex-col justify-center items-center text-center">
                            <h2 className="mb-6 text-3xl font-bold md:text-5xl max-w-4xl">
                                Sei alla ricerca di un furgone 9 posti per il tuo lavoro o per la tua famiglia?
                            </h2>
                            <p className="mb-6 text-xl text-gray-300 sm:text-xl md:mb-10 lg:mb-12 max-w-3xl">
                                Abbiamo a disposizione una vasta scelta di veicoli che possono fare al tuo caso.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button 
                                    onClick={scrollToContact}
                                    className="px-4 py-2 bg-secondary text-gray-800 rounded-md font-semibold hover:bg-secondary/80 transition-colors cursor-pointer"
                                >
                                    Contattaci per sapere di più
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[500px] relative'>
                        <img className='w-full h-full object-cover' src='https://www.sicurauto.it/wp-content/uploads/2024/09/Camion-in-officina-durante-i-controlli-tecnici-di-revisione-e1726650064194.jpg' alt="Slide 3" loading='lazy' />
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="text-white absolute z-10 inset-0 p-6 md:p-16 flex flex-col justify-center items-center text-center">
                            <h2 className="mb-6 text-3xl font-bold md:text-5xl max-w-4xl">
                                Revisioni per tutti i veicoli al di sopra dei 35 quintali in sede
                            </h2>
                            <p className="mb-6 text-xl text-gray-300 sm:text-xl md:mb-10 lg:mb-12 max-w-3xl">
                                La Nuova Idramatic esegue revisioni, collaudi e trasformazioni in sede di veicoli industriali, commerciali, macchine operatrici e molto altro.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button 
                                    onClick={scrollToContact}
                                    className="px-4 py-2 bg-secondary text-gray-800 rounded-md font-semibold hover:bg-secondary/80 transition-colors cursor-pointer"
                                >
                                    Contattaci per maggiori informazioni
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
            <div className="swiper-custom-pagination"></div>
        </section>
    );
};