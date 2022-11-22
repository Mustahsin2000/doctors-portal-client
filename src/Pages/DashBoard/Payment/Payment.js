import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {treatment,role,appoinmentDate,slot} = booking; 
    // console.log(booking);
    return (
        <div>
            <h3 className='text-primary font-bold text-2xl'>Payment for {treatment}</h3>
            <p className=''>Please pay <strong>${role}</strong> for your appoinment on {appoinmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;