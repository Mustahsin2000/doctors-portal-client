import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card w-96  shadow-xl image-full h-32 ${bgClass}`}>
            <figure><img src={icon} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;