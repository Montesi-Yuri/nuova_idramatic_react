import ContactForm from './ContactForm';

export default function ContactSection() {

    return (
        <section id="contacts">
            <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6 flex flex-wrap justify-between items-center slide-in-fwd-center">
                <div className="mt-8 max-w-xl mx-auto">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Contattaci</h2>
                    <p className="mb-4 text-gray-700 text-xl">Puoi contattarci tramite email, telefono o compilando il form sottostante:</p>
                    <div className="container mx-auto px-4">
                        <ContactForm />
                    </div>
                </div>
                <div className="flex items-end p-6 mx-auto w-full sm:w-auto">
                    <iframe 
                        title="map" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.208754936928!2d13.111434312330235!3d43.49983207098936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132da33065d548a9%3A0x518df2a7425b08c2!2sNuova%20Idramatic!5e1!3m2!1sen!2sit!4v1728221402760!5m2!1sen!2sit" 
                        className="w-full h-[300px] sm:w-[500px] sm:h-[500px]"
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                    />
                </div>
            </div>
        </section>
    )
}