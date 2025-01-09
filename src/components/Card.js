import React from 'react';
import './Card.css';

const Card = ({ imageURL, caption }) => {
    return (
        <div className="card">
            <div className="image-container">
                <img src={imageURL} alt={caption} />
            </div>
            <h3 className="card-caption">{caption}</h3>
        </div>
    );
};

export default Card;
