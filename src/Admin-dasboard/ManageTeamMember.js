import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllTeamMEmber from './AllTeamMEmber';

const ManageTeamMember = () => {
    const { data: teamMembers = [] } = useQuery(({
        queryKey: ['teamMember'],
        queryFn: async () => {
            const res = await fetch('https://perlour-new.vercel.app/teamMember', {
                // headers: {
                //     authorization: `bearar ${localStorage.getItem('token')}`
                // }
            });
            const data = await res.json();
            console.log(data)
            return data;
        }
    }));
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10'>All Team Member</h2>
            {
                teamMembers.map(teamMember => <AllTeamMEmber key={teamMember._id} teamMember={teamMember}></AllTeamMEmber>)
            }
        </div>
    );
};

export default ManageTeamMember;