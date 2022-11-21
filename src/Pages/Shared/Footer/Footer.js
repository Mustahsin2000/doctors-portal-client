import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'
import image from '../../../img-logo.png'

const Footer = () => {
    return (
      <footer className=" p-10 text-base-content"
      style={{
        background:`url(${footer})`,
        backgroundSize:'contain'
      }}
      >
      <div className='footer '>
      <div>
        <img src={image} className="h-16" alt="" />
        <p className='font-bold'>Doctors_Portal</p>
      </div> 
      <div>
        <span className="footer-title">Services</span> 
        <Link to='/' className="link link-hover">Branding</Link>
        <Link to='/' className="link link-hover">Design</Link>
        <Link to='/' className="link link-hover">Marketing</Link>
        <Link to='/' className="link link-hover">Advertisemen</Link>
      </div> 
      <div>
        <span className="footer-title">Company</span> 
        <Link to='/' className="link link-hover">About us</Link>
        <Link to='/' className="link link-hover">Contact</Link>
        <Link to='/' className="link link-hover">Jobs</Link>
        <Link to='/' className="link link-hover">Press ki</Link>
      </div> 
      <div>
        <span className="footer-title">Legal</span> 
        <Link to='/' className="link link-hover">Terms of use</Link>
        <Link to='/' className="link link-hover">Privacy policy</Link>
        <Link to='/' className="link link-hover">Cookie polic</Link>
      </div>
      </div>
      
  <div className='mt-16 text-center'>
    <p>Copyright © 2022 - All right reserved by Mudtshdin Al Rafi</p>
  </div>


    </footer>
    
    );
};

export default Footer;