import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../Authenticaiton/AuthProvider';
import useAdmin from '../AdminHook/useAdmin';

const Navber = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    const handleSignOut = () => {
        signOutUser()
            .then(user => {
                console.log('user signOut successfully')
            })
            .then(err => {
                console.error(err)
            })
    };

    const menuItem = <>
        <Link className='mx-8 my-3 font-bold' to={'/'}>Home</Link>
        {
            isAdmin && <Link className='mx-8 my-3 font-bold' to={'/dashboard'}>DASHBOARD</Link>
        }
        <Link className='mx-8 my-3 font-bold' to={'/services'}>Our Services</Link>
        <Link className='mx-8 my-3 font-bold' to={'/ourteam'}>Our Team</Link>
        <Link className='mx-8 my-3 font-bold' to={'/contactus'}>Contact Us</Link>
    </>;
    return (
        <div className=''>

            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="ml-20 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <img src={logo} className='w-28' alt="" />
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                <div className="">
                    {
                        user?.uid ?
                            <Link onClick={handleSignOut} className='btn bg-green-500 lg:ml-8 md:ml-60 ml-20'>SIgnOut</Link>
                            :
                            <Link to={'/login'} className='btn btn-secondary lg:ml-8 md:ml-60 ml-20'>LogIn</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;