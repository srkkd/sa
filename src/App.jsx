import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WomensDay from './pages/WomensDay';
import Aizhb from './pages/Aizhb';
import Serik from './pages/Serik';
import Aizere from './pages/Aizere';

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
    <div className="bg-white text-gray-900 min-h-screen selection:bg-gray-900 selection:text-white font-sans antialiased">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/womensday" element={<WomensDay />} />
        <Route path="/aizhb" element={<Aizhb />} />
        <Route path="/serik" element={<Serik />} />
        <Route path="/aizere" element={<Aizere />} />
      </Routes>
    </div>
  );
}

export default App;
