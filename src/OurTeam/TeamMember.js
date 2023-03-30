import React from 'react';

const TeamMember = ({ teamMember }) => {
    const { name, qualification, image, comeFrom } = teamMember;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 h-48 ">
                    <img src={image.url} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">NAME: {name}</h2>
                    <p>FROM: {comeFrom}</p>
                    <p>QUALIFICATION: {qualification}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">contract with him</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;