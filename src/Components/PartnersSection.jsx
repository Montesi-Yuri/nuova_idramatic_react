import logoFord from '../images/logo_ford.webp';
import logoKnorr from '../images/logo_knorr.webp';
import logoCastrol from '../images/logo_castrol.webp';
import logoHitachi from '../images/logo_hitachi.webp';
import logoZf from '../images/logo_zf.webp'


export default function PartnersSection() {

    const partners = [
        {
            id: 1,
            name:'Ford',
            logo: logoFord
        },
        {
            id: 2,
            name:'Castrol',
            logo: logoCastrol
        },
        {
            id: 3,
            name:'Knorr Bremse',
            logo: logoKnorr
        },
        {
            id: 4,
            name:'Hitachi',
            logo: logoHitachi
        },
        {
            id: 5,
            name:'Zf Friedrichshafen',
            logo: logoZf
        },
        
    ]


    return (
        <>
            <section id="partner" className="py-16 bg-black bg-opacity-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">I Nostri Partner</h2>
                    <p className="text-center text-xl mb-16 text-gray-300">Collaboriamo con i migliori marchi del settore per garantirti qualità e affidabilità</p>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {partners.map((partner) => (
                            <img key={partner.id} src={partner.logo} alt={partner.name} className="h-24 object-contain hover:scale-110 transition-all duration-300" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}