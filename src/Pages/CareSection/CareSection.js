import React from 'react'
import img from '../../assets/images/treatment.png'

const CareSection = () => {
    return (
     <div className='w-11/12 mx-auto'>
           <div className="card card-side bg-base-100  rounded mx-11">
           <div className='w-1/3'>
           <figure><img className='h-full rounded' src={img} alt="Movie" /></figure>
           </div>
            <div className="card-body w-1/2 mt-3">
                <h2 className="card-title text-5xl">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500  mr-10 text-white w-36">Get Started</button>
            </div>
        </div>
     </div>
    );
};

export default CareSection;