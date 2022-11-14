import React from 'react';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const carddata = [
        {
            id:1,
            name:'opening hours',
            description:'Open 9.00 am to 5.00 pm everyday',
            icon:icon1,
            bgClass:'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id:2,
            name:'visit our location',
            description:'chakbazar, chittagong',
            icon:icon2,
            bgClass:'bg-accent'
        },
        {
            id:3,
            name:'contact us',
            description:'Open 9.00 am to 5.00 pm everyday',
            icon:icon3,
            bgClass:'bg-primary'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8  mx-9 gap-3 '>
            {
                carddata.map(card=><InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;