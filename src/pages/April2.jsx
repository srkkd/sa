import { motion, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Footer from '../components/Footer';

const FallingPetals = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const p = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: 5 + Math.random() * 10,
            size: 10 + Math.random() * 20,
            rotation: Math.random() * 360
        }));
        setPetals(p);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {petals.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ y: -50, x: 0, opacity: 0, rotate: p.rotation }}
                    animate={{
                        y: ["0vh", "110vh"],
                        x: [0, Math.random() * 100 - 50, 0],
                        opacity: [0, 0.4, 0],
                        rotate: p.rotation + 360
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        background: 'rgba(255, 182, 193, 0.4)',
                        borderRadius: '50% 0 50% 50%',
                        filter: 'blur(1px)'
                    }}
                />
            ))}
        </div>
    );
};

const wishes = [
    "Пусть каждый твой день будет наполнен теплом и радостью.",
    "Желаю тебе всего самого прекрасного, что только может подарить жизнь.",
    "Ты делаешь мой мир ярче просто своим существованием.",
    "С днём рождения, моя любовь. Я люблю тебя."
];

const qualities = [
    { word: "Любимая", color: "text-rose-400" },
    { word: "Нежная", color: "text-gray-900" },
    { word: "Красивая", color: "text-rose-300" },
    { word: "Моя", color: "text-gray-900" }
];

export default function April2() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="bg-[#fffcfc] text-[#1a1a1a] min-h-screen font-sans antialiased flex flex-col pt-20 overflow-x-hidden">
            <FallingPetals />

            <main className="flex-1 flex flex-col items-center relative z-10">

                {/* Hero Section */}
                <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 md:mt-[-25vh]">

                    {/* Top text: Love is you */}
                    <div className="relative flex flex-col items-center justify-center w-full max-w-3xl mb-6 md:mb-0">
                        <div className="relative flex flex-col items-start w-full px-4 md:px-0 z-10">
                            {/* "Love is" line */}
                            <div className="flex items-baseline gap-3">
                                <span
                                    className="text-6xl md:text-[120px] leading-none"
                                    style={{
                                        fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                                        color: '#3a5c2a',
                                        lineHeight: 1.1
                                    }}
                                >
                                    Love
                                </span>
                                <span
                                    className="text-3xl md:text-5xl font-serif text-gray-700"
                                    style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                                >
                                    is
                                </span>
                            </div>

                            {/* "you" line */}
                            <span
                                className="text-7xl md:text-[140px] leading-none -mt-2 md:-mt-4"
                                style={{
                                    fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                                    color: '#b5294a',
                                    lineHeight: 1.0
                                }}
                            >
                                you
                            </span>

                            {/* Subtitle */}
                            <div className="mt-4 md:mt-6 flex flex-col items-start gap-1">
                                <span
                                    className="text-lg md:text-3xl text-gray-500"
                                    style={{ fontFamily: "'Dancing Script', cursive" }}
                                >
                                    happy 17th birthday, my love
                                </span>
                                <span
                                    className="text-lg md:text-3xl text-gray-500"
                                    style={{ fontFamily: "'Dancing Script', cursive" }}
                                >
                                    02.04
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Flower Image */}
                    <div className="relative flex items-center justify-center max-w-3xl w-full">
                        <img
                            src="/2april2.png"
                            alt="Birthday Bouquet"
                            className="w-full h-auto object-contain pointer-events-none opacity-90"
                            style={{ maxHeight: '60vh' }}
                        />
                    </div>

                    {/* Scroll hint */}
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <div className="w-[1px] h-16 bg-gradient-to-b from-[#1a1a1a]/20 to-transparent" />
                        <span
                            className="text-2xl text-gray-400 opacity-60"
                            style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
                        >
                            i love you
                        </span>
                    </div>
                </div>

                {/* Qualities Grid Section */}
                <section className="py-32 px-10 w-full max-w-7xl mx-auto overflow-visible relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 overflow-visible">
                        {qualities.map((q, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="flex flex-col overflow-visible"
                            >
                                <h2 className={`text-5xl md:text-8xl font-display italic tracking-tighter leading-[1.2] pr-16 md:pr-12 ${q.color}`}>
                                    {q.word}.
                                </h2>
                            </motion.div>
                        ))}
                    </div>

                    {/* Section Divider */}
                    <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(111%+1.3px)] h-[80px] md:h-[120px] fill-white">
                            <path d="M0,0 C150,90 400,90 600,40 C800,-10 1050,-10 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                    </div>
                </section>

                {/* Gratitude Section */}
                <section className="py-24 md:py-48 px-4 md:px-20 w-full bg-white relative">
                    <div className="max-w-7xl mx-auto flex flex-row items-center gap-4 md:gap-32 relative z-10">
                        {/* Left Side: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="w-1/3 md:w-1/2 flex justify-center"
                        >
                            <img
                                src="/2april2.png"
                                alt="Birthday Bouquet"
                                className="w-full max-w-[140px] md:max-w-md h-auto object-contain drop-shadow-sm"
                            />
                        </motion.div>

                        {/* Right Side: Text */}
                        <div className="w-2/3 md:w-1/2 space-y-4 md:space-y-10 relative">
                            {[
                                "Спасибо тебе за то, что ты есть.",
                                "За твою невероятную доброту, за твою искренность и за то, как ты делаешь каждый мой день особенным.",
                                "Ты — самый важный человек в моей жизни.",
                                "С днём рождения, моя любовь. Я счастлив, что ты есть."
                            ].map((row, idx) => (
                                <motion.p
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2, duration: 1 }}
                                    className="text-base md:text-3xl font-display italic text-gray-800 leading-[1.4] md:leading-[1.6] tracking-tight relative z-10"
                                >
                                    {row}
                                </motion.p>
                            ))}

                            {/* Decorative overlay flower */}
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 0.12, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 0.5 }}
                                src="/2april2.png"
                                alt="Decorative flower"
                                className="absolute -bottom-10 -right-6 md:w-64 w-32 h-auto object-contain pointer-events-none z-0 rotate-12"
                            />
                        </div>
                    </div>

                    {/* Wavy Transition */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[1px]">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(110%+1.3px)] h-[80px] md:h-[120px] fill-[#fffcfc]">
                            <path d="M0,0 C150,90 400,90 600,40 C800,-10 1050,-10 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                    </div>
                </section>

                {/* Wishes Section */}
                <section className="relative w-full max-w-4xl mx-auto px-10 pt-12 pb-24 md:py-32 flex flex-col gap-8 md:gap-24">
                    {wishes.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'items-start text-left' : 'items-end text-right'}`}
                        >
                            <div className="max-w-xl group">
                                <div className={`w-8 h-[1px] bg-rose-200 mb-6 transition-all duration-700 group-hover:w-16 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`} />
                                <p className="text-2xl md:text-5xl font-display italic text-[#1a1a1a] leading-[1.3] tracking-tight">
                                    {text}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Section Divider */}
                    <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(111%+1.3px)] h-[80px] md:h-[120px] fill-white">
                            <path d="M0,0 C150,90 400,90 600,40 C800,-10 1050,-10 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                    </div>
                </section>

                {/* Final Quote Section */}
                <section className="relative w-full pt-0 pb-32 md:py-64 flex items-center justify-center overflow-hidden bg-white">
                    <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 w-full flex flex-col md:flex-row items-center gap-4 md:gap-32">

                        {/* Left: bouquet image */}
                        <div className="w-full md:w-1/2 flex justify-center md:block relative h-10 md:h-auto">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.8, ease: "easeOut" }}
                                src="/2april2.png"
                                alt="Birthday flower bouquet"
                                className={isMobile ?
                                    "absolute left-[-40px] top-[-100%] w-36 h-auto object-contain z-0 pointer-events-none opacity-90" :
                                    "relative w-full max-w-[450px] h-auto object-contain z-10 md:scale-110 md:-translate-x-12"
                                }
                            />
                        </div>

                        {/* Right: quote */}
                        <div className={`w-full md:w-1/2 space-y-12 md:space-y-16 relative z-10 ${isMobile ? 'text-center' : 'text-left'}`}>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                className="text-3xl md:text-[46px] font-medium md:font-display md:italic text-[#b5294a] leading-[1.4] md:leading-[1.6] tracking-tight"
                                style={{
                                    fontFamily: "'Dancing Script', cursive",
                                    textShadow: "0 0 30px rgba(181, 41, 74, 0.05)"
                                }}
                            >
                                «В этот день, 2 апреля, мир стал намного лучше. Потому что в нём появилась ты.»
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.2, duration: 1 }}
                                className={`flex flex-col ${isMobile ? 'items-center' : 'items-start'} gap-6`}
                            >
                                <div className="w-24 md:w-32 h-[1.5px] bg-gradient-to-r from-rose-300 to-transparent" />
                                <p className="text-sm md:text-2xl font-serif tracking-[0.45em] text-gray-400 italic lowercase"
                                    style={{ fontFamily: "'Dancing Script', 'Playfair Display', serif" }}
                                >
                                    by Serik, with love
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Wavy Transition */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(111%+1.3px)] h-[80px] md:h-[120px] fill-[#fffcfc]">
                            <path d="M0,0 C150,90 400,90 600,40 C800,-10 1050,-10 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                    </div>
                </section>

                {/* Finale */}
                <div className="pb-32" />

            </main>
            <Footer />
        </div>
    );
}
