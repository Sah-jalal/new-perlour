import React from 'react';
import OurTeam from '../../OurTeam/OurTeam';
import Banner from '../Banner/Banner';
import HandleScreen from '../hanldeScreen/HandleScreen';
import Message from '../Message/Message';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HandleScreen></HandleScreen>
            <div className='text-center'>
                <button type="" className='btn btn-secondary text-center mb-3'>Our TeamMember</button>
            </div>
            <OurTeam></OurTeam>
            <Message></Message>
        </div>
    );
};

export default Home;