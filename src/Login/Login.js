import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../Admin-dasboard/Hooks/useToken';
import { AuthContext } from '../Authenticaiton/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginUserEmail, setLoginUserEmail] = useState(null)
    const [token] = useToken(loginUserEmail)
    const navigate = useNavigate();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        loginUser(email, password)
        .then(user =>{
            setLoginUserEmail(email)
        })
        .then(err =>{
            console.error(err)
        })
    };

    if(token){
        navigate('/')
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                <div className="card  w-full  shadow-2xl bg-base-100">
                        <form className='grid grid-cols-1 gap-4 p-10' onSubmit={handleSubmit(onSubmit)}>
                        
                            <div>
                                <label>email</label><br/>
                                <input className='input input-bordered' {...register("email")} />
                            </div>

                            {/* include validation with required or other standard HTML validation rules */}
                            <div>
                                <label>Password</label><br/>
                                <input className='input input-bordered' {...register("password", { required: true })} />
                            </div>
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='btn btn-primary' type="submit" /> 
                            <p>New To this website? <Link to={'/signup'} className='text-primary'>SignUp</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;