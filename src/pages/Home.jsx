import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <main className="overflow-hidden">
                <Hero />
                <AboutUs />
            </main>
            <Footer />
        </>
    );
}
