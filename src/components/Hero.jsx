
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars, Sparkles } from 'lucide-react';
import { COUPLE } from '../config';

function useDaysTogether() {
    const [days, setDays] = useState(0);

    useEffect(() => {
        const calculateDays = () => {
            const start = new Date(2025, 0, 1, 20, 20, 0); // Jan 1, 2025 at 20:20
            const now = new Date();
            const diffTime = Math.abs(now - start);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            setDays(diffDays);
        };

        calculateDays();
        // Update every minute just in case
        const timer = setInterval(calculateDays, 60000);
        return () => clearInterval(timer);
    }, []);
    return days;
}

export default function Hero() {
    const days = useDaysTogether();

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-white">
            {/* Warmer Pink Dynamic Highlighting */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-rose-100/30 blur-[130px] rounded-full -z-0 pointer-events-none" />
            <div className="absolute top-[30%] left-[10%] w-64 h-64 bg-pink-50/50 blur-[100px] rounded-full animate-pulse pointer-events-none" />

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">


                {/* Elegant Heading with Image */}
                <div className="absolute top-4 md:top-12 left-0 w-full pointer-events-none z-30 flex flex-col xl:flex-row items-center xl:items-start pl-6 pr-6 xl:pr-0">
                    <div className="w-full flex justify-start">
                        <h1 className="font-display text-7xl sm:text-9xl md:text-[130px] font-bold text-gray-900 leading-[0.85] tracking-tighter text-left flex flex-col italic shrink-0 pointer-events-auto">
                            <span>Serik</span>
                            <span className="text-rose-500 lowercase my-2 text-4xl sm:text-6xl md:text-7xl not-italic tracking-widest opacity-30">and</span>
                            <span>Aizere.</span>
                        </h1>
                    </div>
                    <div className="w-full sm:w-auto flex justify-center xl:justify-start pointer-events-auto mt-8 xl:mt-0 xl:absolute xl:top-0 xl:left-[35rem]">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            src="/SA2.png"
                            alt="Serik and Aizere Art"
                            className="w-[200px] sm:w-[240px] md:w-[280px] xl:w-[320px] object-contain shrink-0"
                        />
                    </div>
                </div>

                {/* Warm Minimalist Counter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-[650px] mb-12 flex flex-col items-center"
                >
                    <div className="px-6 py-2 rounded-full border border-rose-50 bg-white shadow-sm mb-6">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-rose-300 font-bold">Наши общие дни</p>
                    </div>

                    <div className="flex items-baseline gap-4 group">
                        <span className="font-sans text-[100px] md:text-[150px] font-black text-gray-900 leading-none tracking-tighter transition-all duration-700 group-hover:text-rose-500">
                            {days}
                        </span>
                        <span className="text-2xl text-rose-300 font-light lowercase font-display italic">дня</span>
                    </div>
                </motion.div>

                {/* Soft Luxury Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-24 mt-16"
                >
                    {[
                        { value: Math.floor(days / 30), label: 'месяцев нежности' },
                        { value: Math.floor(days / 7), label: 'недель счастья' },
                        { value: days * 24, label: 'часов восхищения' },
                    ].map((s, idx) => (
                        <div key={idx} className="bg-white border border-rose-50 px-10 py-8 rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-rose-100/20 transition-all duration-700 hover:-translate-y-2 group">
                            <div className="text-xl font-black text-gray-900">{s.value.toLocaleString('ru')}</div>
                            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-2 font-bold group-hover:text-rose-400 transition-colors">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Warm Floating Icons */}
            <div className="absolute top-[20%] right-[10%] text-rose-200 animate-float opacity-40 pointer-events-none">
                <Stars size={40} strokeWidth={1} />
            </div>
            <div className="absolute bottom-[15%] left-[10%] text-rose-100 animate-float-slow opacity-60 pointer-events-none">
                <Heart size={64} fill="currentColor" strokeWidth={0} />
            </div>
        </section>
    );
}
