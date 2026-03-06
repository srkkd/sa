import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Login() {
    const [pin, setPin] = useState('');
    const [error, setError] = useState(false);
    const { login, isAuthenticated } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handlePinChange = (e) => {
        const value = e.target.value;
        if (value.length <= 4) {
            setPin(value);
            if (value.length === 4) {
                // Auto submit when 4 digits are entered
                if (login(value)) {
                    navigate('/');
                } else {
                    setError(true);
                    setPin('');
                    setTimeout(() => setError(false), 2000);
                }
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fallback for manual submit if needed
        if (pin.length === 4) {
            if (login(pin)) {
                navigate('/');
            } else {
                setError(true);
                setPin('');
                setTimeout(() => setError(false), 2000);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#fffcfc] flex items-center justify-center p-6">
            <div className="w-full max-w-sm flex flex-col items-center gap-12">
                <div className="text-center space-y-2">
                    <h1
                        className="text-6xl text-[#1a1a1a] leading-none tracking-tight"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                        Welcome
                    </h1>
                    <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium font-sans">
                        Введите PIN-код
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
                    <input
                        type="password"
                        value={pin}
                        onChange={handlePinChange}
                        placeholder="••••"
                        maxLength={4}
                        className={`w-40 text-center text-4xl py-4 bg-transparent border-b-2 outline-none transition-colors tracking-[0.3em] font-mono ${error ? 'border-rose-400 text-rose-500' : 'border-gray-200 focus:border-gray-800 text-gray-800'
                            }`}
                        autoFocus
                    />

                    <button
                        type="submit"
                        className="hidden" // Hiding the button since we auto-submit
                    >
                        Войти
                    </button>

                    {error && (
                        <p className="text-xs text-rose-400 tracking-widest uppercase absolute bottom-20 font-sans font-medium" style={{ letterSpacing: '0.15em' }}>
                            Неверный код
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
