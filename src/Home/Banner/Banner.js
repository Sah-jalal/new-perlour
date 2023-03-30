import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="lg:w-1/3  rounded-lg shadow-2xl" alt='' />
                    <div className='mx-8'>
                        <h1 className="text-5xl font-bold">BEAUTY SALON <br/> FOR EVERY WOMEN</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in.<br/>
                         Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br/>
                          In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary"><Link to={'./contactus'}>Get Started</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;