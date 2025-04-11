import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa'; // Import React Icons
import musicFile from '../assets/No Time for Caution.mp3'; // Import the audio file

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5); // Default volume level 50%

    // Toggle play/pause
    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Change volume
    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    return (
        <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 100 }}>
            <audio ref={audioRef} src={musicFile} loop />
            
            {/* Play/Pause Button */}
            <button
                onClick={togglePlayPause}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '24px',
                    marginRight: '10px',
                }}
            >
                {isPlaying ? (
                    <FaPause /> // React Icon for Pause
                ) : (
                    <FaPlay /> // React Icon for Play
                )}
            </button>

            {/* Volume Control */}
            {/* <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                style={{ cursor: 'pointer' }}
            />
            <FaVolumeUp style={{ color: '#fff', marginLeft: '10px' }} /> React Icon for Volume */}
        </div>
    );
};

export default MusicPlayer;
