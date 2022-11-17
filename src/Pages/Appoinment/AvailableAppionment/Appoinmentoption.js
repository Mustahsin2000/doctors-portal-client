import React from 'react';

const Appoinmentoption = ({ appoinmentoption , setTreatment }) => {
    const { name, slots } = appoinmentoption;
    return (
        <div>
            <div className="card shadow-xl mb-16 mt-3">
                <div className="card-body text-center ">
                    <h2 className="text-xl  text-center text-secondary font-bold ">{name}</h2>
                    <p className='font-semibold text-center'>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                    <p className='font-semibold text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center ">
                        <label
                        onClick={()=>setTreatment(appoinmentoption)}
                        htmlFor="booking-modal" className="btn  btn-primary text-white">Book Appoinment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinmentoption;