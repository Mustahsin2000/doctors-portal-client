import React from 'react';
import appoinment from '../../../assets/images/appointment.png'
const Contact = () => {
    return (
       <section className='my-16 p-6'
       style={{background:`url(${appoinment})`}}
        >
        <div className='text-center text-white'>
            <h3 className='text-lg font-bold text-primary'>Contact Us</h3>
            <h2 className='text-2xl'>Stay connected with us</h2>
        </div>
        <div className='text-center mt-5 p-6'>
            <div>
            <input className='w-1/3 rounded-lg h-10 my-3 p-3' type="email" placeholder='Email' />
            </div>
            <div>
            <input className='w-1/3 rounded-lg h-10 my-3 p-3' type="text" placeholder='Subject' />
            </div>
            <div>
            <input className='w-1/3 rounded-lg h-24 my-3 p-3' type="text" placeholder='message' />
            </div>
            <button type='submit' className="btn btn-primary mt-6 text-white">Submit</button>
        </div>
       </section>
    );
};

export default Contact;