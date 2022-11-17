
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import image from '../../../assets/images/bg.png'


const AppoinmentBanner = ({selectedDate,setselectedDate}) => {
    
    return (
        <header className='my-11'
        style={{
            background:`url(${image})`,
            backgroundSize:'cover'
          }}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                 <div className='mr-16'>
                    <DayPicker
                    mode="single"
                    selected = {selectedDate}
                    onSelect = {setselectedDate}
                    >
                        
                    </DayPicker>
                    {/* <p>You have selecte date : {format(selectedDate,'PP')}</p> */}
                 </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;