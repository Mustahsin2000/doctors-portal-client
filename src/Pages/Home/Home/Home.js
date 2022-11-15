import React from 'react';
import CareSection from '../../CareSection/CareSection';
import Homeappoinment from '../../Homeappoinment/Homeappoinment';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-3'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <CareSection></CareSection>
            <Homeappoinment></Homeappoinment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;