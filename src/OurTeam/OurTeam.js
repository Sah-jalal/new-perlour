import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TeamMember from './TeamMember';

const OurTeam = () => {

    const { data: teamMembers = [] } = useQuery(({
        queryKey: ['teamMember'],
        queryFn: async () => {
            const res = await fetch('https://perlour-new.vercel.app/teamMember',{
                // headers: {
                //     authorization: `bearar ${localStorage.getItem('token')}`
                // }
            });
            const data = await res.json();
            return data;
        }
    }));

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center'>
            {
                teamMembers.map(teamMember => <TeamMember key={teamMember._id} teamMember={teamMember}></TeamMember>)
            }
        </div>
    );
};

export default OurTeam;