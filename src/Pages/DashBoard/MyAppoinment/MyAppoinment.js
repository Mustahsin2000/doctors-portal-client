import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppoinment = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings = [] } = useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async () =>{
            const res= await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-2xl font-bold text-secondary'>My Appoinments</h3>

            <div className="overflow-x-auto mt-6">
                <table className="table w-full">
                  
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                        bookings && 
                        bookings?.map((booking,i)=> <tr key={booking._id}>
                            <th>{i+1}</th>
                            <td>{booking.patient}</td>
                            <td>{booking.treatment}</td>
                            <td>{booking.appoinmentDate}</td>
                            <td>{booking.slot}</td>
                            
                            <td>
                                {
                                    booking.role && !booking.paid &&
                                    <Link className='btn btn-outline btn-primary' to={`/dashboard/payment/${booking._id}`}>pay</Link>

                                }
                                {
                                    booking.role && booking.paid && <span className='btn btn-secondary'>paid</span>
                                }
                            </td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;