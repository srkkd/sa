import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, Heart, Sparkles, Map, Sunset, Layers } from 'lucide-react';

const PHOTOS = [
    { icon: Sparkles, label: 'СИЯНИЕ МОМЕНТОВ', color: 'bg-white' },
    { icon: Map, label: 'ПУТИ ВДВОЕМ', color: 'bg-white' },
    { icon: Heart, label: 'СЕРДЦЕ ИСТОРИИ', color: 'bg-white' },
    { icon: Sunset, label: 'ОБЩИЕ ЗАКАТЫ', color: 'bg-white' },
    { icon: Camera, label: 'В ОБЪЕКТИВЕ', color: 'bg-white' },
    { icon: ImageIcon, label: 'ВСПЫШКИ СЧАСТЬЯ', color: 'bg-white' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-48 px-6 bg-white relative border-t border-rose-50">
            {/* Soft pink highlight */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-50/10 blur-[150px] rounded-full -z-0 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-40"
                >
                    <p className="text-[11px] uppercase tracking-[0.5em] font-black text-rose-300 mb-6 drop-shadow-sm">Визуальный архив</p>
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter uppercase leading-tight">Галерея чувств</h2>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-100 to-transparent mx-auto mt-8" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {PHOTOS.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.8 }}
                                className="bg-white p-10 md:p-14 rounded-[48px] border border-rose-50 transition-all duration-700 hover:shadow-2xl hover:shadow-rose-100/30 cursor-pointer group relative overflow-hidden aspect-[4/5] flex flex-col items-center justify-center text-center"
                            >
                                <div className="text-rose-100 group-hover:text-rose-500 group-hover:scale-125 transition-all duration-700 mb-10">
                                    <Icon size={40} strokeWidth={1} />
                                </div>

                                <div className="w-12 h-px bg-rose-50 mb-6 group-hover:w-full transition-all duration-1000 group-hover:bg-rose-200" />
                                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-300 group-hover:text-gray-900 transition-colors">
                                    {p.label}
                                </p>

                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[10px] font-black text-rose-300 uppercase tracking-widest">
                                    ✦
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
