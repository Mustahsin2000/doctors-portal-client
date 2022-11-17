import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppionment from '../AvailableAppionment/AvailableAppionment';

const Appoinment = () => {
    const [selectedDate,setselectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner selectedDate={selectedDate} setselectedDate={setselectedDate}></AppoinmentBanner>
            <AvailableAppionment selectedDate={selectedDate} setselectedDate={setselectedDate}></AvailableAppionment>
        </div>
    );
};

export default Appoinment;