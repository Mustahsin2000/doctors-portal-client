import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor,setDeletingDoctor] = useState(null);

    const closeModal = () =>{
        setDeletingDoctor(null);
    }



    const { data: doctors, isLoading,refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handledeleteDoctor = doctor =>{
        fetch(`http://localhost:5000/doctors/${doctor._id}`,{
            method:'DELETE',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }  
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                refetch();
                toast.success(` ${doctor.name}  Deleted Successfully`)
            }
        })
    }



    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            {/* <h2 className='text-3xl font-bold text-primary mb-6'>Manage Doctors:{doctors?.length}</h2> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                     {
                        doctors.map((doctor,i)=>   <tr key={doctor._id}>
                            <th>
                                <label>
                                    {i+1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    {/* <div>
                                        <div className="font-bold">{doctor.name}</div>
                                        <div className="text-sm opacity-50">{doctor.email}</div>
                                    </div> */}
                                </div>
                            </td>
                            <td className='font-semibold text-primary'>
                                {doctor.name}
                                <br />
                                {/* <span className="badge badge-ghost badge-sm">{doctor.email}</span> */}
                            </td>
                            <td className='font-bold'>{doctor.email}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">{doctor.speciality}</button>
                            </th>
                            <th>
                            <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-outline  btn-primary">Delete</label>
                            
                            </th>
                        </tr>)
                     }
                    </tbody>
                    

                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingDoctor.name}. It can't be data back`}
                closeModal={closeModal}
                successAction = {handledeleteDoctor}
                modalData = {deletingDoctor}
                successButtonName = "Delete"
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;