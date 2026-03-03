import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';

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
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <AboutUs />
      </main>

      {/* High-End Editorial Footer */}
      <footer className="py-20 px-10 bg-white border-t border-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-2 -rotate-2" style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}>Forever</h2>
            <p className="text-[10px] tracking-[0.5em] font-black text-rose-300 uppercase underline decoration-rose-50 underline-offset-4 mt-4">EST. 2025</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-12">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300">BORN FOR LOVE</span>
            </div>
            <p className="text-[8px] font-black text-gray-100 uppercase tracking-widest mt-8">sa 03.03.2026 &copy; srk.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
