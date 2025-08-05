import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import './VideoBackgroundSection.css';
import HelloWorld from './HelloWorld';

export default function VideoBackgroundSection() {
    const playerRef = useRef(null);

    const handleProgress = (state) => {
        if (state.playedSeconds >= 150) {
            playerRef.current.seekTo(0); // jump back to the beginning
        }
    };

  return (
    <div className="video-section">
      <ReactPlayer
        src="https://www.youtube.com/watch?v=Y7wDH3wb05o"
        playing={true}
        loop
        muted
        controls={false}
        onProgress={handleProgress}
        width="100%"
        height="100%"
        className="react-player"
      />

      <div className="video-content">
        <HelloWorld />
      </div>
    </div>
  );
}
