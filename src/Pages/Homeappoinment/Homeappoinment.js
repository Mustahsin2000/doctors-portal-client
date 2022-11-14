import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import './Homeappoinment.css'
const Homeappoinment = () => {
    return (
        <section className='homeapooinment mt-32  h-4/5 mb-32 rounded'
        style={{background:`url(${appoinment})`}}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt="" className="img-doctor bg-none  -mt-40 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl -mb-4" />
                    <div>
                        <h1 className="text-2xl font-bold text-cyan-400 mb-3">Appoinment</h1>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white">Appoinment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homeappoinment;