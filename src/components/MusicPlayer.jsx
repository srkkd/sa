import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { COUPLE } from '../config';

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);

    const toggle = () => {
        const audio = audioRef.current;
        if (playing) { audio.pause(); setPlaying(false); }
        else { audio.play(); setPlaying(true); }
    };

    const toggleMute = () => {
        audioRef.current.muted = !muted;
        setMuted(!muted);
    };

    return (
        <div className="flex items-center gap-4 px-3 py-1.5 rounded-full border border-rose-50 bg-white/50 backdrop-blur-sm shadow-sm transition-all hover:border-rose-100">
            <audio ref={audioRef} src={COUPLE.song.url} loop />

            <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${playing ? 'bg-rose-400 animate-pulse' : 'bg-gray-200'}`} />
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-800 leading-tight truncate max-w-[80px]">{COUPLE.song.title}</span>
                </div>
            </div>

            <div className="flex items-center gap-1.5 border-l border-rose-50 pl-3 ml-1">
                <button onClick={toggle} className="w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:text-rose-500 transition-colors">
                    {playing ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
                </button>
                <button onClick={toggleMute} className="w-6 h-6 rounded-full flex items-center justify-center text-gray-300 hover:text-rose-300 transition-colors">
                    {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                </button>
            </div>
        </div>
    );
}
