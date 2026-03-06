import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function Admin() {
    const { isAizhbEnabled, toggleAizhb } = useAppContext();

    return (
        <div className="min-h-screen bg-[#0f0f11] text-white flex flex-col items-center justify-center p-6">
            <Link to="/" className="absolute top-8 left-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">
                HOME
            </Link>

            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-8 backdrop-blur-md">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold tracking-tight">System Controls</h1>
                    <p className="text-sm text-gray-400">Manage real-time visibility of protected routes.</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
                    <div className="flex flex-col">
                        <span className="font-medium text-rose-100">Aizhb Route Access</span>
                        <span className="text-xs text-gray-500">Enable or disable the /aizhb page across all devices instantly.</span>
                    </div>

                    <button
                        onClick={toggleAizhb}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${isAizhbEnabled ? 'bg-rose-500' : 'bg-gray-600'
                            }`}
                    >
                        <span
                            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isAizhbEnabled ? 'translate-x-7' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
