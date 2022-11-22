import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import id from 'date-fns/esm/locale/id/index.js';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const imageHostkey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostkey);

    const {data: specialities ,isLoading} = useQuery({
        queryKey:['speciality'],
        queryFn:async ()=>{
          const res =  await  fetch('http://localhost:5000/appoinmentSpeciality');
          const data = await res.json();
          return data;
        }
    })

    const handleaddaDoctor = data => {
        // console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`
        fetch(url,{
            method:'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgData =>{
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name:data.name,
                    email:data.email,
                    speciality:data.speciality,
                    image: imgData.data.url
                }

                //save doctor information to the database
                fetch('http://localhost:5000/doctors',{
                    method:'POST',
                    headers:{
                        'content-type' : 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(result=>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/managedoctors');
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-2xl font-bold text-primary'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleaddaDoctor)}>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: 'Name is required' })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.name && <p className='text-red-700 font-semibold'>{errors.name?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text"
                        {...register("email", { required: 'Email Address is required' })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>

                    <select 
                    {...register('speciality')}
                    className="select select-accent w-full max-w-xs">
                        {/* <option disabled selected>Pick a speciality</option> */}
                        {
                            specialities.map(speciality=>   <option key={speciality._id} value={speciality.name}>{speciality.name}</option>)
                        }
                      
                        
                    </select>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: 'image is required' })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.img && <p className='text-red-700 font-semibold'>{errors.img.message}</p>}
                </div>



                <input className='btn btn-accent w-full mt-6 text-white' type="submit" value="Add Doctor" />
                {/* {
                    signupError && <p className='text-red-600 font-bold'>{signupError}</p>
                } */}

            </form>
        </div>
    );
};

export default AddDoctor;