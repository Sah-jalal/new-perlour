import React from 'react';
import HandleScreenimg from '../../assets/images/handleScrren.png';

const HandleScreen = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 text-center">
                <div className="hero-content text-left flex-col lg:flex-row">
                    <img src={HandleScreenimg} className="lg:w-1/3 rounded-lg shadow-2xl" alt='' />
                    <div className='lg:mx-10 lg:w-96'>
                        <h1 className="text-2xl font-bold">Let Us hanlde your <br/> screen <span className='text-secondary'>Professionally</span></h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='grid grid-cols-2 gap-10'>
                            <div>
                                <h2 className='text-2xl font-bold text-secondary'>500 +</h2>
                                <p>Happy customer</p>
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold text-secondary'>16 +</h2>
                                <p>services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandleScreen;