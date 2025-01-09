import React from 'react';
import './Video.css';

const Video = ({ src, poster, width, height, loop, muted, controls, title }) => {
    return (
        <div className="video-container">
            {title && <h2 className="video-title">{title}</h2>}
            <video 
                className="video-player" 
                src={src} 
                poster={poster} 
                width={width} 
                height={height} 
                autoPlay 
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
