import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Appoinmentoption from './Appoinmentoption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
const AvailableAppionment = ({selectedDate}) => {
   //  const [appoinment,setAppoinment] = useState([]);

    const [treatment,setTreatment] = useState(null);

    const date = format(selectedDate,'PP');


    const {data:appoinment = [], refetch,isLoading} = useQuery({
      queryKey:['appoinment',date],
      queryFn:()=> fetch(`http://localhost:5000/v2/appoinmentOptions?date=${date}`)
      .then(res=>res.json())
    });

    if(isLoading){
      return <Loading></Loading>
    }

   //  useEffect(()=>{
   //      fetch('http://localhost:5000/appoinmentOptions')
   //      .then(res=>res.json())
   //      .then(data=>setAppoinment(data))
   //  },[])
    return (
       <section className='my-16'>
        <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate,'PP')}</p>
       
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6'>
          {
            appoinment.map(option=><Appoinmentoption
            key={option._id} appoinmentoption={option} setTreatment={setTreatment}
            ></Appoinmentoption>)
          }
       </div>
      {
        treatment &&
         <BookingModal selectedDate={selectedDate} treatment={treatment} 
         setTreatment={setTreatment}
         refetch={refetch}
         ></BookingModal>
      }
       </section>
    );
};

export default AvailableAppionment;