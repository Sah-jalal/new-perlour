import React, { useState } from 'react';
import ConfermationModal from './ConfermationModal/ConfermationModal';

const AllTeamMEmber = ({ teamMember }) => {
    const { name, image, qualification } = teamMember;

    const [deletingMember, setDeletingMember] = useState(null);

    const cancelDelete = () =>{
        setDeletingMember(null)
    }

    const handleDeleteMember = teamMember =>{
        fetch(`https://perlour-new.vercel.app/teamMember/${teamMember._id}`,{
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {})
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={image.thumb.url} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {qualification}
                            </td>
                            <td><button className='btn btn-success'>Update</button></td>
                            <th>
                                <label onClick={() => setDeletingMember(teamMember)} htmlFor="my-modal-6" className="btn btn-danger">delate</label>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            {
                deletingMember && <ConfermationModal
                title={`are you sure you want to delete ${teamMember.name}`}
                message={`if once you delete you can't be recover it `}
                clogeModal = {cancelDelete}
                confermModal = {handleDeleteMember}
                member = {deletingMember}
                >
                </ConfermationModal>
            }
        </div>
    );
};

export default AllTeamMEmber;