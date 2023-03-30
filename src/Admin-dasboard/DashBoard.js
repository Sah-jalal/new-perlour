import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Authenticaiton/AuthProvider';

const DashBoard = () => {
    const getUsers = useContext(AuthContext);
    console.log(getUsers.user)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center ">
                    <h2 className='font-bold text-4xl text-blue-400 uppercase bg-gray-500 rounded-xl px-10'>this is admin dashboard</h2>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-slate-500 text-base-content">
                        <li className=' mb-3 bg-slate-700 rounded-lg text-white font-bold'><Link className='mx-auto' to={'/dashboard/updateTeam'}>Add A Team Meamber</Link></li>
                        <li className=' bg-slate-700 rounded-lg text-white font-bold'><Link className='mx-auto' to={'/dashboard/manageTeamMember'}>Manage TeamMember</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;