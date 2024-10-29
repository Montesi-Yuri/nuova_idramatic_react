import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import ServiceSection from './Components/ServiceSection';
import AboutUsSection from './Components/AboutUsSection';
import CtaSection from './Components/CtaSection';

function App() {

	return (
		<div className="App">
			<div className='bg-gradient relative  py-1'>
				<div className='grid-background'>
					<Header />
					<main className='mx-auto relative'>
						<HeroSection />
						<ServiceSection />
						<AboutUsSection />
						<CtaSection />
					</main>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
