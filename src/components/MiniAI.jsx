import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, Sparkles, Command } from 'lucide-react';
import { COUPLE } from '../config';

const INITIAL_MESSAGE = {
    role: 'ai',
    content: `Система активна. Я ваш персональный LoveBot Engine. Моя задача — хранение и визуализация истории вашего союза. Чем могу быть полезен?`,
};

export default function MiniAI() {
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            let response = "";
            const query = input.toLowerCase();

            if (query.includes('дней') || query.includes('сколько')) {
                const days = Math.floor((new Date() - new Date(COUPLE.startDate)) / (1000 * 60 * 60 * 24));
                response = `Анализ завершен. Хронология вашего союза насчитывает ${days} дней. Это время абсолютной синергии.`;
            } else if (query.includes('комплимент')) {
                const compliments = [
                    `Aizere, ваше влияние на структуру этого мира — бесценно.`,
                    `Свет, который вы излучаете, является константой в жизни Serik.`,
                    `Вы — архитектура его счастья.`,
                ];
                response = compliments[Math.floor(Math.random() * compliments.length)];
            } else {
                response = `Запрос обработан. Serik + Aizere = Константа вечной связи.`;
            }

            setMessages(prev => [...prev, { role: 'ai', content: response }]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <section id="ai" className="py-48 px-6 bg-white relative border-t border-rose-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-rose-50/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    {/* Headers removed as requested */}
                </motion.div>

                <div className="bg-white rounded-[56px] overflow-hidden border border-rose-100 shadow-2xl shadow-rose-100/30 flex flex-col h-[700px] transition-all duration-700 hover:border-rose-300 group">
                    {/* Header */}
                    <div className="border-b border-rose-50 p-10 flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white transition-all duration-700 group-hover:scale-110">
                                <Sparkles size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-900 font-black text-[10px] uppercase tracking-[0.3em] font-sans">LOVEBOT ENGINE 4.0</span>
                                <span className="text-[9px] uppercase tracking-[0.4em] text-rose-400 font-bold mt-1">SYSTEM OPERATIONAL</span>
                            </div>
                        </div>
                        <Heart size={20} className="text-rose-100 group-hover:text-rose-400 transition-colors" fill="currentColor" />
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-12 space-y-12 bg-rose-50/5 scroll-smooth">
                        <AnimatePresence>
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[75%] p-8 rounded-[36px] ${m.role === 'user'
                                        ? 'bg-gray-900 text-white rounded-tr-none shadow-xl'
                                        : 'bg-white border border-rose-50 text-gray-600 rounded-tl-none shadow-sm'
                                        } text-[11px] font-bold leading-relaxed tracking-tight`}>
                                        {m.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex gap-2 p-6 bg-white border border-rose-50 rounded-[28px] rounded-tl-none">
                                        <span className="w-1 h-1 bg-rose-400 rounded-full animate-bounce" />
                                        <span className="w-1 h-1 bg-rose-400 rounded-full animate-bounce [animation-delay:-0.1s]" />
                                        <span className="w-1 h-1 bg-rose-400 rounded-full animate-bounce [animation-delay:-0.2s]" />
                                    </div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-10 border-t border-rose-50 flex gap-6 bg-white items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="ЗАДАЙТЕ ВОПРОС ОБ ИСТОРИИ..."
                            className="flex-1 bg-rose-50/30 border-none rounded-3xl px-8 py-5 text-[11px] font-bold text-gray-900 transition-all appearance-none outline-none placeholder:text-gray-300 tracking-[0.1em]"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="w-16 h-16 rounded-3xl bg-gray-900 text-white flex items-center justify-center hover:bg-rose-500 transition-all duration-700 disabled:opacity-20 hover:scale-105 shadow-xl shadow-gray-200"
                        >
                            <Send size={20} strokeWidth={2.5} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
