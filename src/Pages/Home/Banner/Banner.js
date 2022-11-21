import React from 'react';
import './Banner.css'
import img from '../../../assets/images/adult-business-care-chair-wallpaper-preview.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
      <div>
          <div className="carousel w-full  rounded-lg h-3/6">
        <div id="slide1" className="carousel-item relative ">
         <div className='carosol-img '>
         <img className="chair  rounded w-screen" src={img} alt=""  />
         </div>
         <div className="absolute flex justify-end  transform -translate-y-1/2 left-24  top-1/3 ">
          <h1 className='text-6xl font-bold text-white '>
          Your New Smile Starts
           <br />
            Here
          </h1>
        </div>
         <div className="absolute flex justify-end  transform -translate-y-1/2 left-24  top-1/2 ">
          <h1 className='text-2xl  font-bold text-white '> handle with care with our excelency </h1>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-20 right-5 bottom-1/3  mx-3">
        <button className="btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500  mr-10 text-white"><Link to='/appoinment'>Appoinment</Link></button>
    
    </div>
         
        </div> 
       
      
      
      </div>
      </div>

    );
};

export default Banner;