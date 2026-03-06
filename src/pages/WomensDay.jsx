import { motion, useScroll, useTransform } from 'framer-motion';
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
    "Пусть в твоей жизни будет больше поводов улыбаться.",
    "Пусть всё, к чему ты стремишься, получается легко.",
    "Пусть рядом всегда будут люди, которые ценят тебя по-настоящему.",
    "Оставайся такой же сильной, искренней и красивой."
];

const qualities = [
    { word: "Сильная", color: "text-rose-400" },
    { word: "Искренняя", color: "text-gray-900" },
    { word: "Красивая", color: "text-rose-300" },
    { word: "Неповторимая", color: "text-gray-900" }
];

export default function WomensDay() {
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
                    <div className="relative flex items-center justify-center max-w-3xl w-full">
                        <img
                            src="/8march.png"
                            alt="8 March Flower"
                            className="w-full h-auto object-contain pointer-events-none opacity-80"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <h1
                                className="text-8xl md:text-[220px] font-light text-[#1a1a1a] select-none leading-none mt-[-5%] drop-shadow-sm"
                                style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
                            >
                                8 March
                            </h1>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col items-center gap-4">
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

                    {/* Section Divider - Wavy Transition */}
                    <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(111%+1.3px)] h-[80px] md:h-[120px] fill-white">
                            <path d="M0,0 C150,90 400,90 600,40 C800,-10 1050,-10 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                    </div>
                </section>
                {/* Gratitude Section - Side by Side Layout (Updated for Mobile) */}
                <section className="py-24 md:py-48 px-4 md:px-20 w-full bg-white relative">
                    <div className="max-w-7xl mx-auto flex flex-row items-center gap-4 md:gap-32 relative z-10">
                        {/* Left Side: Image (Better Mobile Scaling) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="w-1/3 md:w-1/2 flex justify-center"
                        >
                            <img
                                src="/8march2.png"
                                alt="8 March Decoration"
                                className="w-full max-w-[140px] md:max-w-md h-auto object-contain drop-shadow-sm"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>

                        {/* Right Side: Text Context */}
                        <div className="w-2/3 md:w-1/2 space-y-4 md:space-y-10 relative">
                            {[
                                "Спасибо тебе за то, что ты есть.",
                                "За твою невероятную поддержку, за твоё безграничное терпение и за то, как ты наполняешь смыслом каждый мой день.",
                                "Ты — мой вдохновитель, мой самый близкий человек и частичка моей души.",
                                "Я благодарен судьбе за каждый момент, проведённый рядом с тобой, и за всё то тепло, которое ты даришь."
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

                            {/* Secondary Translucent Flower Overlay */}
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 0.12, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 0.5 }}
                                src="/8march2.png"
                                alt="Decorative flower"
                                className="absolute -bottom-10 -right-6 md:w-64 w-32 h-auto object-contain pointer-events-none z-0 rotate-12"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>

                    {/* Refined "Wavy" Transition */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[1px]">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(110%+1.3px)] h-[80px] md:h-[120px] fill-[#fffcfc]">
                            <path d="M0,0 C150,90 400,90 600,40 C800,-10 1050,-10 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                    </div>
                </section>

                {/* The Wishes - Digital Letter (Moved after Gratitude) */}
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

                    {/* Section Divider - Wavy Transition to Quote Section */}
                    <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(111%+1.3px)] h-[80px] md:h-[120px] fill-white">
                            <path d="M0,0 C150,90 400,90 600,40 C800,-10 1050,-10 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                    </div>
                </section>

                {/* Quote Section - Desperate Housewives (Editorial Layout for PC) */}
                <section className="relative w-full pt-0 pb-32 md:py-64 flex items-center justify-center overflow-hidden bg-white">
                    <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 w-full flex flex-col md:flex-row items-center gap-4 md:gap-32">

                        {/* Left Side: housewives1 (PC: Large Side Image; Mobile: Absolute Floating) */}
                        <div className="w-full md:w-1/2 flex justify-center md:block relative h-10 md:h-auto">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.8, ease: "easeOut" }}
                                src="/housewives1.png"
                                alt="Flower decoration"
                                className={isMobile ?
                                    "absolute left-[-40px] top-[-100%] w-36 h-auto object-contain z-0 pointer-events-none opacity-90" :
                                    "relative w-full max-w-[550px] h-auto object-contain z-10 md:scale-125 md:-translate-x-12"
                                }
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        {/* Right Side: Text & Signature */}
                        <div className={`w-full md:w-1/2 space-y-12 md:space-y-16 relative z-10 ${isMobile ? 'text-center' : 'text-left'}`}>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                className="text-3xl md:text-[46px] font-medium md:font-display md:italic text-[#ff3399] leading-[1.4] md:leading-[1.6] tracking-tight"
                                style={{
                                    fontFamily: "'Dancing Script', cursive",
                                    textShadow: "0 0 30px rgba(255, 51, 153, 0.05)"
                                }}
                            >
                                «Карлос Солис любил свою жену больше всех на свете, не смотря на то что она была тщеславна, эгоистична и капризна. Но в те моменте когда его жене было не легко, Карлос любил ее чуть чуть сильнее»
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
                                    style={{ fontFamily: "'Wrongo', 'Dancing Script', 'Playfair Display', serif" }}
                                >
                                    by Desperate Housewives
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* housewives2 - Subtle background element (PC: Bottom Right Faded; Mobile: Bottom Floating) */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={isMobile ? { opacity: 0.5, scale: 1 } : { opacity: 0.1, scale: 1.2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                        src="/housewives2.png"
                        alt="Subtle flower decor"
                        className={isMobile ?
                            "absolute right-[-40px] bottom-4 w-36 h-auto object-contain z-0 pointer-events-none grayscale opacity-30" :
                            "absolute md:-bottom-20 md:-right-20 w-[600px] h-auto object-contain grayscale pointer-events-none z-0 opacity-20"
                        }
                        loading="lazy"
                        decoding="async"
                    />

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
