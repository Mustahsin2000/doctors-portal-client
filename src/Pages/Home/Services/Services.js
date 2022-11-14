import React from 'react';
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = [
        {
            id:1,
            name:'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: img1
        },
        {
            id:2,
            name:'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: img2
        },
        {
            id:3,
            name:'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            img: img3
        }
    ]
    return (
        <div className='mt-11'>
            <div className='text-center'>
               <h1 className='text-2xl text-primary font-bold'>Our Services</h1>
               <h2 className='text-xl mt-2 font-semibold'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-8 mt-6 mb-11'>
                 {
                    servicesData.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
                 }
            </div>
        </div>
    );
};

export default Services;