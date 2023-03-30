import React from 'react';
import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import icon3 from '../../assets/icons/icon3.png';

const Services = () => {

    const showAllservices = () =>{
        document.getElementById('services').classList.remove('hidden');
        document.getElementById('hide-btn').classList.remove('hidden');
        document.getElementById('show-btn').classList.add('hidden')
    };

    const showLess = () =>{
        document.getElementById('services').classList.add('hidden');
        document.getElementById('hide-btn').classList.add('hidden');
        document.getElementById('show-btn').classList.remove('hidden')
    }

    return (
        <div>
            <h4 className='text-xl font-bold text-center'>Our Awesome <span className='text-secondary'>Services</span></h4>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 my-16'>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={icon1} className='w-16 ml-32' alt="" />
                        <h2 className="text-lg font-bold">Anti Age Face Treatement</h2>
                        <p className='text-secondary font-bold'>$ 199</p>
                        <p>IF you want to groing your face than you have come to the right place, jsut feel free contact us</p>
                    </div>
                </div>

                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={icon2} className='w-16 ml-32' alt="" />
                        <h2 className="text-lg font-bold">Anti Age Face Treatement</h2>
                        <p className='text-secondary font-bold'>$ 99</p>
                        <p>IF you want to groing your face than you have come to the right place, jsut feel free contact us</p>
                    </div>
                </div>

                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={icon3} className='w-16 ml-32' alt="" />
                        <h2 className="text-lg font-bold">Anti Age Face Treatement</h2>
                        <p className='text-secondary font-bold'>$ 299</p>
                        <p>IF you want to groing your face than you have come to the right place, jsut feel free contact us</p>
                    </div>
                </div>

            </div>

            <div id='services' className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 my-16 hidden'>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={icon1} className='w-16 ml-32' alt="" />
                        <h2 className="text-lg font-bold">Anti Age Face Treatement</h2>
                        <p className='text-secondary font-bold'>$ 199</p>
                        <p>IF you want to groing your face than you have come to the right place, jsut feel free contact us</p>
                    </div>
                </div>

                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={icon2} className='w-16 ml-32' alt="" />
                        <h2 className="text-lg font-bold">Anti Age Face Treatement</h2>
                        <p className='text-secondary font-bold'>$ 99</p>
                        <p>IF you want to groing your face than you have come to the right place, jsut feel free contact us</p>
                    </div>
                </div>

                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={icon3} className='w-16 ml-32' alt="" />
                        <h2 className="text-lg font-bold">Anti Age Face Treatement</h2>
                        <p className='text-secondary font-bold'>$ 299</p>
                        <p>IF you want to groing your face than you have come to the right place, jsut feel free contact us</p>
                    </div>
                </div>

            </div>

            <div className='text-center'>
                <button type="" id='show-btn' className='btn btn-secondary text-center' onClick={showAllservices}>Explore More</button>
                <button type="" id='hide-btn' className='btn btn-secondary text-center hidden' onClick={showLess}>Show Less</button>
            </div>
        </div>
    );
};

export default Services;