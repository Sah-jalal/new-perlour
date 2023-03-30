import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../Admin-dasboard/Hooks/useToken';
import { AuthContext } from '../Authenticaiton/AuthProvider';

const SignUp = () => {

    const { creatUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [createdUserEmail, setCreatedUserEmail] = useState(null)
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if(token){
        navigate('/')
    }

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const userData = {email, password, name}
        creatUser(email, password)
        .then(data =>{
        })
        .then(err =>{
            // console.log('something is rong, check your email carefully');
            toast('')
        });

        fetch('https://perlour-new.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email);
        })

    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card  w-full  shadow-2xl bg-base-100">
                        <form className='grid grid-cols-1 gap-4 p-10' onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Name</label><br />
                                <input className='input input-bordered' {...register("Name")} />
                            </div>

                            <div>
                                <label>email</label><br />
                                <input className='input input-bordered' {...register("email")} />
                            </div>

                            <div>
                                <label>Password</label><br />
                                <input className='input input-bordered' {...register("password", { required: true })} />
                            </div>

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='btn btn-primary' type="submit" />
                            <p>Allready have an account? <Link to={'/login'} className='text-primary'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;