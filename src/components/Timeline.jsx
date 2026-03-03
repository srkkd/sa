import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Sparkles, Stars, Gem, Flower, Infinity as InfinityIcon, ArrowUpRight } from 'lucide-react';
import { IMPORTANT_DATES } from '../config';

const iconMap = {
    Heart,
    Sparkles,
    Stars,
    Gem,
    Flower,
    Infinity: InfinityIcon,
};

function DateCard({ item, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const isLeft = index % 2 === 0;
    const Icon = iconMap[item.icon] || Heart;

    return (
        <div ref={ref} className={`flex items-start gap-12 md:gap-24 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 max-w-sm"
            >
                <div className="group bg-white border border-rose-50 p-10 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-rose-100/30 transition-all duration-700 hover:border-rose-200">
                    <div className="flex items-center justify-between mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-300 group-hover:text-rose-500 transition-all duration-700 group-hover:scale-110">
                            <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-200 font-extrabold group-hover:text-rose-400 transition-colors">
                            {new Date(item.date).getFullYear()}
                        </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 tracking-tighter uppercase group-hover:text-rose-600 transition-colors whitespace-nowrap">
                        {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium group-hover:text-gray-600 transition-colors">
                        {item.desc}
                    </p>

                    <div className="mt-8 flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-widest text-gray-300 font-bold">
                            {new Date(item.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                        </span>
                        <ArrowUpRight size={14} className="text-rose-100 group-hover:text-rose-300 transition-colors" />
                    </div>
                </div>
            </motion.div>

            {/* Visual Marker - Warm Dot */}
            <div className="hidden md:flex flex-shrink-0 w-px h-40 bg-rose-50 relative top-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border border-rose-100 shadow-sm" />
            </div>

            {/* Spacer for opposite side */}
            <div className="flex-1 max-w-sm hidden md:block" />
        </div>
    );
}

export default function Timeline() {
    return (
        <section id="dates" className="py-48 px-6 bg-white relative">
            {/* Pink Glow Background */}
            <div className="absolute top-[20%] left-0 w-1/3 h-full bg-rose-50/20 blur-[150px] rounded-full -z-0 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-40 flex flex-col items-center"
                >
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-100 to-transparent mx-auto" />
                </motion.div>

                <div className="relative">
                    <div className="flex flex-col gap-24">
                        {IMPORTANT_DATES.map((item, i) => (
                            <DateCard key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
