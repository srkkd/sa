import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="py-20 px-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div>
                    <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-2 -rotate-2" style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}>Forever</h2>
                    <p className="text-[10px] tracking-[0.5em] font-black text-rose-300 uppercase underline decoration-rose-50 underline-offset-4 mt-4">EST. 2025</p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300">BORN FOR LOVE</span>
                    <div className="flex items-center gap-3">
                        <Link to="/serik" className="font-display italic text-2xl md:text-3xl text-gray-400 hover:text-rose-500 transition-colors">Serik</Link>
                        <span className="font-display italic text-xl text-gray-200">and</span>
                        <Link to="/aizere" className="font-display italic text-2xl md:text-3xl text-gray-400 hover:text-rose-500 transition-colors">Aizere</Link>
                    </div>
                    <div className="flex flex-col items-center md:items-end mt-4">
                        <p className="text-[8px] font-black text-gray-100 uppercase tracking-widest">sa 03.03.2026 &copy; srk.</p>
                        <p className="text-[7px] font-bold text-gray-300 uppercase tracking-[0.1em] mt-1">last update 04.03.2026 &copy; srk.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
