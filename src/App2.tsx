import React from 'react'
import { Link } from 'react-scroll'
import { FaCar, FaTruck, FaCog, FaTools, FaUsers, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --text: #0c0b03;
    --background: #fefdfb;
    --primary: #c9a74a;
    --secondary: #91c4de;
    --accent: #f4ce43;
  }
`

const DotPattern = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2" cy="2" r="1" fill="currentColor" fillOpacity="0.3" />
  </svg>
)

const LinePattern = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 40 L40 0" stroke="currentColor" strokeWidth="2" fill="none" strokeOpacity="0.4" />
  </svg>
)

export default function NuovaIdramaticSPA() {
  return (
    <div className="font-sans text-[var(--text)]">
      <GlobalStyle />
      {/* Header */}
      <header className="bg-[var(--background)] shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/placeholder.svg?height=50&width=200" alt="Nuova Idramatic Logo" className="h-12" />
          <nav className="hidden md:flex space-x-6">
            {['Servizi', 'Chi Siamo', 'Partner', 'Contatti'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(' ', '-')}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-[var(--accent)] cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-[var(--primary)] text-[var(--background)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 text-[var(--background)]">
          {[...Array(100)].map((_, i) => (
            <DotPattern key={i} className="absolute" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }} />
          ))}
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Affidabilità e Competenza dal 1999</h1>
            <p className="text-xl mb-6">La tua officina di fiducia per veicoli industriali, commerciali e autovetture</p>
            <Link
              to="contatti"
              smooth={true}
              duration={500}
              className="bg-[var(--accent)] hover:bg-[var(--accent)] hover:brightness-90 text-[var(--background)] font-bold py-2 px-6 rounded-full cursor-pointer inline-block"
            >
              Contattaci
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=400&width=600" alt="Veicoli e attrezzature" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="servizi" className="py-16 bg-[var(--secondary)] bg-opacity-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 text-[var(--secondary)]">
          {[...Array(20)].map((_, i) => (
            <LinePattern key={i} className="absolute" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }} />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">I Nostri Servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaTruck className="text-4xl mb-4 text-[var(--primary)]" />, title: 'Riparazioni Veicoli', desc: 'Industriali, commerciali e autovetture' },
              { icon: <FaCar className="text-4xl mb-4 text-[var(--primary)]" />, title: 'Sostituzione Pneumatici', desc: 'Per tutti i tipi di veicoli' },
              { icon: <FaCog className="text-4xl mb-4 text-[var(--primary)]" />, title: 'Noleggio', desc: 'Furgoni, escavatori e attrezzature' },
              { icon: <FaTools className="text-4xl mb-4 text-[var(--primary)]" />, title: 'Impianti Idraulici', desc: 'Riparazione su veicoli e altre applicazioni' },
            ].map((service, index) => (
              <div key={index} className="bg-[var(--background)] p-6 rounded-lg shadow-md text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">I Nostri Partner</h2>
          <p className="text-center mb-8 text-gray-600">Collaboriamo con i migliori marchi del settore per garantirti qualità e affidabilità</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Ford', 'Castrol', 'Wabco', 'Sailun', 'Falken', 'Hitachi', 'Takeuchi'].map((partner) => (
              <img key={partner} src={`/placeholder.svg?height=80&width=160&text=${partner}`} alt={partner} className="h-20 object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="py-16 bg-[var(--secondary)] bg-opacity-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 text-[var(--secondary)]">
          {[...Array(100)].map((_, i) => (
            <DotPattern key={i} className="absolute" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }} />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Chi Siamo</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg?height=400&width=600" alt="Officina Nuova Idramatic" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg mb-6">
                Fondata nel 1999 a Castelplanio (AN), Nuova Idramatic è diventata un punto di riferimento per la riparazione e manutenzione di veicoli industriali, commerciali e autovetture. Con oltre 20 anni di esperienza, offriamo una vasta gamma di servizi, dalla meccanica tradizionale alle più moderne tecnologie.
              </p>
              <p className="text-lg">
                La nostra missione è fornire servizi di alta qualità, garantendo la massima affidabilità e sicurezza per i vostri veicoli. Il nostro team di tecnici qualificati è costantemente aggiornato sulle ultime innovazioni del settore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-[var(--text)]">
          {[...Array(50)].map((_, i) => (
            <DotPattern key={i} className="absolute" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }} />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Cosa Dicono i Nostri Clienti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Marco B.', text: 'Servizio eccellente e personale competente. Consigliatissimo!' },
              { name: 'Laura T.', text: 'Rapidi, efficienti e prezzi onesti. La mia officina di fiducia.' },
              { name: 'Giovanni R.', text: 'Professionisti seri e affidabili. Ottima assistenza per la mia flotta aziendale.' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-[var(--background)] p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti e Footer */}
      <footer id="contatti" className="bg-[var(--primary)] text-[var(--background)] py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-[var(--background)]">
          {[...Array(20)].map((_, i) => (
            <LinePattern key={i} className="absolute" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }} />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h3 className="text-2xl font-bold mb-4">Contattaci</h3>
              <p className="flex items-center mb-2"><FaPhoneAlt className="mr-2" /> 0731 123456</p>
              <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" /> Via dell'Industria, 1 - 60031 Castelplanio (AN)</p>
              <p className="flex items-center"><FaClock className="mr-2" /> Lun-Ven: 8:00-18:00, Sab: 8:00-12:00</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h3 className="text-2xl font-bold mb-4">Seguici</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[var(--accent)]"><FaUsers className="text-2xl" /></a>
                {/* Add more social icons as needed */}
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8">
              <h3 className="text-2xl font-bold mb-4">Mappa</h3>
              <div className="h-48 bg-gray-300 rounded-lg">
                {/* Embed Google Maps here */}
                <img src="/placeholder.svg?height=200&width=400&text=Google+Maps" alt="Mappa" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Nuova Idramatic. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}