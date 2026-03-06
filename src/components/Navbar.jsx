import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';
import { useAppContext } from '../context/AppContext';

const NAV_LINKS = [
    { href: '/', label: 'Главная', special: false },
    { href: '/womensday', label: '8 March', special: true },
    { href: '/aizhb', label: '2 April', special: true },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { isAizhbEnabled, isAuthenticated } = useAppContext();

    const visibleLinks = NAV_LINKS.filter(l => {
        // If the path is protected (any path other than maybe home if it wasn't protected), 
        // hide it if not authenticated.
        if (l.href !== '/login' && !isAuthenticated) return false;

        // Admin toggle for /aizhb
        if (l.href === '/aizhb' && !isAizhbEnabled) return false;

        return true;
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-10 bg-transparent transition-all duration-700">
            <div className="max-w-7xl mx-auto px-10 flex items-center justify-between gap-4">
                {/* Logo - Custom SA Image */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/sa.png"
                        alt="SA Logo"
                        className="h-24 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-12">
                    {visibleLinks.map(l => (
                        <Link
                            key={l.href}
                            to={l.href}
                            className={`transition-colors ${l.special ? "font-display italic lowercase text-2xl text-rose-400 hover:text-rose-500" : "text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-gray-900"}`}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <div className="pl-6 border-l border-rose-50/50">
                        <MusicPlayer />
                    </div>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden w-12 h-12 flex items-center justify-center text-gray-900 bg-white/50 backdrop-blur-md rounded-full border border-rose-50 shadow-sm"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
                </button>
            </div>

            {/* Mobile menu - Hide via CSS to keep audio playing */}
            <div
                className={`md:hidden absolute top-full right-6 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-rose-100/50 z-50 p-6 flex flex-col gap-6 transition-all duration-300 ${menuOpen ? 'opacity-100 scale-100 pointer-events-auto mt-2' : 'opacity-0 scale-95 pointer-events-none mt-0'}`}
            >
                <nav className="flex flex-col gap-4">
                    {visibleLinks.map((l, i) => (
                        <Link
                            key={l.href}
                            to={l.href}
                            onClick={() => setMenuOpen(false)}
                            className={`transition-colors ${l.special ? "font-display italic lowercase text-2xl text-rose-400 hover:text-rose-500" : "text-lg font-display font-medium uppercase tracking-[0.2em] text-gray-900 hover:text-rose-500"}`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <div className="pt-6 border-t border-rose-50/50">
                    <MusicPlayer />
                </div>
            </div>
        </header>
    );
}
