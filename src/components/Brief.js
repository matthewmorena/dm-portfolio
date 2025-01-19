import React from 'react';
import './Brief.css';

const Brief = () => {
    return (
        <div className='project-brief'>
            <div className="brief-text">
                <h2 style={{ fontSize: "3em", marginTop: "0%" }}><strong>Project Brief</strong></h2>
                <span style={{ fontSize: "1.5em" }}>For this project I had to create an app that does not exist and I had freedom to choose whatever I would like. KickOff is a sports app that allows you to keep track of day to day sports. However, this app also allows you to see the location of restaurants or bars that are broadcasting the sport you are looking for. Being able to connect with the community around you is important in sports Kickoff your journey today! This was a solo project where I took care of everything.</span>
            </div>
            <img className='brief-image' src="https://static.wixstatic.com/media/e645a6_55478deb69e4421681d70cfb4ac67fcb~mv2.png/v1/fill/w_984,h_984,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e645a6_55478deb69e4421681d70cfb4ac67fcb~mv2.png" alt="Kickoff App Logo"></img>
        </div>
    );
};

export default Brief;
