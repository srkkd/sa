import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AppContext = createContext();

export function AppProvider({ children }) {
    // Auth is session-based (resets on tab close, persists on refresh)
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('sa_auth') === 'true';
    });

    // Toggle stays global and synced via Supabase
    const [isAizhbEnabled, setIsAizhbEnabled] = useState(false);

    // Initial fetch and Realtime subscription
    useEffect(() => {
        const fetchAndSubscribe = async () => {
            // 1. Initial fetch
            try {
                const { data, error } = await supabase
                    .from('settings')
                    .select('is_aizhb_enabled')
                    .eq('id', 1)
                    .single();

                if (data) {
                    setIsAizhbEnabled(data.is_aizhb_enabled);
                }
            } catch (err) {
                console.error('Supabase fetch error:', err);
            }

            // 2. Subscribe to changes
            const channel = supabase
                .channel('settings_changes')
                .on(
                    'postgres_changes',
                    { event: 'UPDATE', schema: 'public', table: 'settings', filter: 'id=eq.1' },
                    (payload) => {
                        if (payload.new && payload.new.is_aizhb_enabled !== undefined) {
                            setIsAizhbEnabled(payload.new.is_aizhb_enabled);
                        }
                    }
                )
                .subscribe();

            return () => {
                supabase.removeChannel(channel);
            };
        };

        fetchAndSubscribe();
    }, []);

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
        // Optimistic update
        setIsAizhbEnabled(newValue);

        // Push to Supabase
        try {
            const { error } = await supabase
                .from('settings')
                .upsert({ id: 1, is_aizhb_enabled: newValue });

            if (error) {
                console.error('Error updating Supabase:', error);
            }
        } catch (err) {
            console.error('Supabase upsert error:', err);
        }
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
