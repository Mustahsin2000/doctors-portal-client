import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Checkoutform from './Checkoutform';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { treatment, role, appoinmentDate, slot } = booking;
    // console.log(booking);
    // if(navigation.state === 'loading'){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h3 className='text-primary font-bold text-2xl mt-6 text-center'>Payment for {treatment}</h3>
            <p className='text-2xl mt-3 text-center'>Please pay <strong>${role}</strong> for your appoinment on <strong> {appoinmentDate}</strong>  at <strong>{slot}</strong></p>
            <div className='card shadow-xl p-11 mt-11 w-96  '>
                <Elements stripe={stripePromise}>
                    <Checkoutform
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;