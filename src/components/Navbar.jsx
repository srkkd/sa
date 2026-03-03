import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Zap } from 'lucide-react';
import MusicPlayer from './MusicPlayer';
import { COUPLE } from '../config';

const NAV_LINKS = [
    { href: '#hero', label: 'Главная' },
    { href: '#about', label: 'О нас' },
    { href: '#gallery', label: 'Галерея' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-10 bg-transparent transition-all duration-700">
            <div className="max-w-7xl mx-auto px-10 flex items-center justify-between gap-4">
                {/* Logo - Custom SA Image */}
                <a href="#hero" className="flex items-center">
                    <img
                        src="/sa.png"
                        alt="SA Logo"
                        className="h-24 w-auto object-contain"
                    />
                </a>

                {/* Desktop nav - Modern Russian Labels */}
                <nav className="hidden md:flex items-center gap-12">
                    {NAV_LINKS.map(l => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-[10px] tracking-[0.4em] uppercase font-bold text-gray-400 hover:text-rose-500 transition-all duration-500 relative group"
                        >
                            {l.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-px bg-rose-400 transition-all duration-700 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Music player - Refined */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="w-[1px] h-4 bg-gray-50" />
                    <MusicPlayer />
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-gray-400 hover:text-gray-900 transition-colors"
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
                    {NAV_LINKS.map((l, i) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg font-display font-medium uppercase tracking-[0.2em] text-gray-900 hover:text-rose-500 transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div className="pt-6 border-t border-rose-50/50">
                    <MusicPlayer />
                </div>
            </div>
        </header>
    );
}
