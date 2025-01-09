import React from 'react';
import './CardContainer.css'; // Styling for the layout

const CardContainer = ({ title, children, columns = 3 }) => {
    return (
        <div className="card-container-wrapper">
            <h1 className="card-container-title">{title}</h1>
            <div
                className="card-container"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`, // Dynamically set columns
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default CardContainer;
