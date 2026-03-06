import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    // Auth is session-based (resets on tab close, persists on refresh)
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('sa_auth') === 'true';
    });

    // Toggle stays global and synced via server
    const [isAizhbEnabled, setIsAizhbEnabled] = useState(false);

    // Sync isAizhbEnabled from server (polling)
    useEffect(() => {
        const fetchToggleState = async () => {
            try {
                const res = await fetch('/api/state');
                const data = await res.json();
                setIsAizhbEnabled(data.isAizhbEnabled);
            } catch (e) {
                console.error('Failed to sync toggle state:', e);
            }
        };

        fetchToggleState();
        const interval = setInterval(fetchToggleState, 2000);
        return () => clearInterval(interval);
    }, []);

    const updateServerToggle = async (value) => {
        try {
            await fetch('/api/state', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isAizhbEnabled: value })
            });
        } catch (e) {
            console.error('Failed to update server toggle:', e);
        }
    };

    const login = async (pin) => {
        if (pin === '2020') {
            setIsAuthenticated(true);
            sessionStorage.setItem('sa_auth', 'true');
            return true;
        }
        return false;
    };

    const logout = async () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('sa_auth');
    };

    const toggleAizhb = async () => {
        const newValue = !isAizhbEnabled;
        setIsAizhbEnabled(newValue);
        await updateServerToggle(newValue);
    };

    return (
        <AppContext.Provider value={{
            isAuthenticated,
            login,
            logout,
            isAizhbEnabled,
            toggleAizhb
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
