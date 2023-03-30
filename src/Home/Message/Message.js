import React from 'react';
import { useForm } from 'react-hook-form';


const Message = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='mt-10'>
            <div className="hero bg-base-200">
                <div className="cardflex-shrink-0 lg:w-1/3 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h2 className='text-center text-xl font-bold my-3 text-secondary'>Just Tell us, <br /> What king of beauty you want?</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder="name" className="mb-6 input input-bordered w-full text-center" {...register("name", { required: true })} />
                                <input type="text" placeholder="email" className="mb-6 input input-bordered w-full text-center" {...register("email", { required: true })} />
                                <input type="text" placeholder="Phone" className="mb-6 input input-bordered w-full text-center" {...register("phone", { required: true })} />
                                <textarea className="textarea textarea-primary w-full text-center" placeholder="message" {...register("message", { required: true })} ></textarea>
                                <div>
                                    <input type="submit" className="btn btn-primary w-full text-center" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;