import React from 'react';
import './Video.css';

const Video = ({ src, poster, width, height, loop, muted, controls, title }) => {
    const isMobile = window.innerWidth <= 768;
    return (
        <div className="video-container">
            {title && <h2 className="video-title">{title}</h2>}
            <video 
                className="video-player" 
                src={src} 
                poster={poster} 
                height={height} 
                autoPlay={!isMobile}
                loop={loop} 
                muted={muted} 
                controls={controls}
            >
                Your browser does not support the video tag.
            </video>

        </div>
    );
};

export default Video;
