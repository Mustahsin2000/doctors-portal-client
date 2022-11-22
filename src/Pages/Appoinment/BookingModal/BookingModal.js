import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
const BookingModal = ({ treatment,setTreatment, selectedDate,refetch }) => {
    const { name, slots,role } = treatment; //treatment is appoinment options
    const date = format(selectedDate, 'PP');

    const {user} = useContext(AuthContext);


    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const namee = form.namee.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking = {
            appoinmentDate:date,
            treatment:name,
            patient: namee,
            slot,
            email,
            phone,
            role
        }
       fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(booking)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.acknowledged){
            setTreatment(null);
            toast.success('booking confirmed');
            refetch();
        }
        else{
            toast.error(data.message);
        }
       })
        // setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-6 '>
                        <input type="text" disabled value={date} className="input w-full h-11 input-bordered font-bold bg-primary" />

                        {/* time option ta dekhanor jonno */}
                        <select name='slot' className="select select-bordered w-full ">
                            
                            {
                                slots.map((slot,i)=><option key={i} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='namee' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input w-full h-11" />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full h-11" />
                        <input name='email' type="email"  defaultValue={user?.email} disabled placeholder="Email"  className="input w-fullh-9 mb-3 h-11" />

                        <input className='btn btn-accent w-full   text-white' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;