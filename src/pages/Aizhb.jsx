import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Footer from '../components/Footer';

// Floating soft dots background
const FloatingDots = () => {
    const [dots, setDots] = useState([]);
    useEffect(() => {
        setDots(Array.from({ length: 18 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: 4 + Math.random() * 8,
            delay: Math.random() * 4,
            duration: 6 + Math.random() * 8,
        })));
    }, []);
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {dots.map(d => (
                <motion.div
                    key={d.id}
                    style={{
                        position: 'absolute',
                        left: d.left,
                        top: d.top,
                        width: d.size,
                        height: d.size,
                        borderRadius: '50%',
                        background: 'rgba(219, 112, 147, 0.18)',
                    }}
                    animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: d.duration, repeat: Infinity, delay: d.delay, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
};

const letter = [
    "Я редко говорю такие вещи — но сегодня хочу, чтобы ты знала: я правда люблю тебя.",
    "Иногда я веду себя холодно, молчу, отдаляюсь. Но это не значит, что чувства пропали. Внутри всё по-другому — просто я не всегда умею это показывать.",
    "Ты в моей жизни уже больше года. И за это время я понял одно — я не хочу, чтобы тебя не было рядом.",
    "Я выбрал тебя осознанно. И до сих пор не жалею об этом выборе.",
    "Помню, как стеснялся даже смотреть на тебя в самом начале. Теперь всё иначе — мы стали ближе, и это то, что мне нравится больше всего.",
    "Ты для меня самая красивая. Без преувеличений.",
];

const qualities = [
    { word: "нежная", sub: "в каждом жесте" },
    { word: "искренняя", sub: "даже когда молчишь" },
    { word: "красивая", sub: "просто так" },
    { word: "моя", sub: "и это главное" },
];

export default function Aizhb() {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <div
            ref={containerRef}
            className="min-h-screen font-sans antialiased flex flex-col overflow-x-hidden"
            style={{ background: 'linear-gradient(160deg, #fff5f7 0%, #fffaf8 50%, #f9f4ff 100%)' }}
        >
            <FloatingDots />

            <main className="flex-1 flex flex-col items-center relative z-10 pt-24">

                {/* ── HERO ── */}
                <section className="w-full max-w-2xl mx-auto px-6 flex flex-col items-center text-center gap-6 pb-6">
                    {/* Date pill */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
                        style={{
                            background: 'rgba(219,112,147,0.10)',
                            border: '1px solid rgba(219,112,147,0.22)',
                        }}
                    >
                        <span className="text-xs tracking-[0.3em] uppercase text-rose-400 font-medium">02 · 04</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="leading-none"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                        <span
                            className="block text-[70px] md:text-[110px]"
                            style={{ color: '#c0394b', lineHeight: 1 }}
                        >
                            С днём,
                        </span>
                        <span
                            className="block text-[80px] md:text-[130px]"
                            style={{ color: '#8b1a2e', lineHeight: 0.95 }}
                        >
                            Aizere
                        </span>
                    </motion.h1>

                    {/* Thin divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="w-16 h-[1px] bg-rose-300 mx-auto"
                    />

                    {/* Sub */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="text-base md:text-xl text-gray-400"
                        style={{ letterSpacing: '0.18em', fontFamily: "'Playfair Display', serif" }}
                    >
                        happy 17th birthday
                    </motion.p>
                </section>

                {/* ── FLOWER IMAGE ── */}
                <section className="w-full max-w-md mx-auto px-6 flex justify-center pb-4 -mt-24">
                    <motion.img
                        src="/2april2.png"
                        alt="Birthday flowers"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
                        className="w-full h-auto object-contain drop-shadow-sm"
                        style={{ maxHeight: '55vh' }}
                    />
                </section>

                {/* ── QUALITIES ── */}
                <section className="w-full max-w-2xl mx-auto px-6 md:px-10 py-16 md:py-24">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                        {qualities.map((q, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="flex flex-col gap-1"
                            >
                                <span
                                    className="text-4xl md:text-6xl leading-none"
                                    style={{
                                        fontFamily: "'Dancing Script', cursive",
                                        color: i % 2 === 0 ? '#c0394b' : '#8b1a2e',
                                    }}
                                >
                                    {q.word}
                                </span>
                                <span
                                    className="text-xs text-gray-400 tracking-widest"
                                    style={{ letterSpacing: '0.2em' }}
                                >
                                    {q.sub}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── DIVIDER ── */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="w-24 h-[1px] bg-rose-200 mx-auto mb-16"
                />

                {/* ── LETTER ── */}
                <section className="w-full max-w-2xl mx-auto px-6 md:px-10 pb-24 flex flex-col gap-10">
                    {/* Letter header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-8 h-[1px] bg-rose-300" />
                        <p
                            className="text-xs tracking-[0.3em] uppercase text-rose-400"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            письмо
                        </p>
                    </motion.div>

                    {/* Letter body */}
                    <div className="flex flex-col gap-8">
                        {letter.map((para, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.9, delay: i * 0.06 }}
                                className="text-lg md:text-2xl text-gray-700 leading-[1.75] tracking-tight"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}
                            >
                                {para}
                            </motion.p>
                        ))}
                    </div>

                    {/* Signature */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-col items-start gap-3 pt-6"
                    >
                        <div className="w-12 h-[1px] bg-rose-200" />
                        <span
                            className="text-4xl md:text-5xl text-rose-400"
                            style={{ fontFamily: "'Dancing Script', cursive" }}
                        >
                            люблю тебя.
                        </span>
                        <span
                            className="text-sm text-gray-400"
                            style={{ letterSpacing: '0.3em' }}
                        >
                            — srk
                        </span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                            className="text-base text-gray-300 pt-2"
                            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
                        >
                            кажется.
                        </motion.span>
                    </motion.div>
                </section>

                {/* ── CLOSING QUOTE ── */}
                <section className="w-full max-w-2xl mx-auto px-6 md:px-10 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="rounded-2xl px-8 py-10 md:py-14 text-center flex flex-col gap-6"
                        style={{
                            background: 'rgba(219,112,147,0.06)',
                            border: '1px solid rgba(219,112,147,0.15)',
                        }}
                    >
                        <p
                            className="text-2xl md:text-4xl text-[#8b1a2e] leading-snug"
                            style={{ fontFamily: "'Dancing Script', cursive" }}
                        >
                            "Выбор — это не момент. Это каждый день заново."
                        </p>
                        <span
                            className="text-xs text-gray-400 tracking-[0.3em] uppercase"
                        >
                            02 апреля · 2026
                        </span>
                    </motion.div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
