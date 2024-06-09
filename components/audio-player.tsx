"use client";

import { usePlayer } from '@/hooks/usePlayer';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { ClosePlayer } from './audio-player-components/close-player';

export const Player = () => {
    const player = usePlayer();

    if (!player.song) return;

    return (
        <AudioPlayer
            key={player.song.id}
            autoPlay
            src={player.song.downloadUrl[4].url}
            className="fixed bottom-0"
            customAdditionalControls={
                [
                  RHAP_UI.LOOP,
                  <ClosePlayer />
                ]
              }
        />
    );
}