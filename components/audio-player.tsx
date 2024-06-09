"use client";

import { usePlayer } from '@/hooks/usePlayer';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Player = () => {
    const player = usePlayer();

    if (!player.song) return;

    return (
        <AudioPlayer
            key={player.song.id}
            autoPlay
            src={player.song.downloadUrl[4].url}
            className="fixed bottom-0"
        />
    );
}