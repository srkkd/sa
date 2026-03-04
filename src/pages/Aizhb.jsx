import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Aizhb() {
    return (
        <div className="bg-[#0f0f11] text-white min-h-[100dvh] font-sans antialiased flex flex-col overflow-hidden relative">

            {/* Minimalist Back Link */}
            <Link to="/" className="absolute top-8 left-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors z-50">
                RETURN
            </Link>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                {/* Ambient Red Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 text-center flex flex-col items-center gap-6">
                    <h1 className="text-7xl md:text-[140px] font-display italic text-rose-100 tracking-tighter leading-none mix-blend-screen opacity-90 pr-4">
                        2 April
                    </h1>

                    <p className="text-[10px] md:text-xs font-medium tracking-[0.8em] uppercase text-white/30 mt-4 md:mt-8">
                        Special Event &bull; Coming Soon
                    </p>

                    <div className="mt-16 md:mt-24 px-8 py-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                        <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase text-white/50 text-center">Скоро будет доступна...</span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
