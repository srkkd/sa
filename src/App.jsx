import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WomensDay from './pages/WomensDay';
import Aizhb from './pages/Aizhb';
import Serik from './pages/Serik';
import Aizere from './pages/Aizere';
import April2 from './pages/April2';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { AppProvider, useAppContext } from './context/AppContext';
import { Navigate } from 'react-router-dom';

// Protected route wrapper for any main page
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAppContext();
  // Ensure we do strict boolean checking and redirect
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

// Toggle-dependent wrapper specifically for Aizhb
const AizhbRoute = ({ children }) => {
  const { isAuthenticated, isAizhbEnabled } = useAppContext();

  // First wall: Auth
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // Second wall: Admin Toggle
  if (!isAizhbEnabled) return <Navigate to="/" replace />;

  return children;
};

function App() {
  useEffect(() => {
    // Minimalist grain/noise overlay for high-end feel
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0.02';
    overlay.style.background = 'url("https://grainy-gradients.vercel.app/noise.svg")';
    document.body.appendChild(overlay);

    // Subtle heart particles for interaction (sharper, smaller)
    const handleClick = (e) => {
      const heart = document.createElement('div');
      heart.innerHTML = '&#x2665;&#xFE0E;';
      heart.style.position = 'fixed';
      heart.style.left = (e.clientX - 5) + 'px';
      heart.style.top = (e.clientY - 5) + 'px';
      heart.style.fontSize = '8px';
      heart.style.color = '#1a1a1a';
      heart.style.opacity = '0.5';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '9998';
      heart.style.transition = 'all 2s cubic-bezier(0.16, 1, 0.3, 1)';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.transform = `translateY(-100px) scale(2) rotate(${Math.random() * 90 - 45}deg)`;
        heart.style.opacity = '0';
      }, 20);

      setTimeout(() => heart.remove(), 2000);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
      overlay.remove();
    };
  }, []);

  return (
    <AppProvider>
      <div className="bg-white text-gray-900 min-h-screen selection:bg-gray-900 selection:text-white font-sans antialiased">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/7775" element={<Admin />} />

          {/* All protected routes MUST be wrapped so a direct URL jump is caught */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/womensday" element={<ProtectedRoute><WomensDay /></ProtectedRoute>} />
          <Route path="/serik" element={<ProtectedRoute><Serik /></ProtectedRoute>} />
          <Route path="/aizere" element={<ProtectedRoute><Aizere /></ProtectedRoute>} />
          <Route path="/april2" element={<ProtectedRoute><April2 /></ProtectedRoute>} />

          <Route path="/aizhb" element={<AizhbRoute><Aizhb /></AizhbRoute>} />

          {/* Catch-all to send unknown links to home (which redirects to login if unauth) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
