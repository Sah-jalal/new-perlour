import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateTeam = () => {
    const { register, handleSubmit, reset } = useForm();



    const onSubmit = data => {
        const image = data.picture[0];
        const fromData = new FormData();
        fromData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=f3e9dada3bdc91e5053c2e7c06875f31`;
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {
                const teamMember = {
                    name: data.name,
                    comeFrom: data.comeFrom,
                    qualification: data.qualification,
                    gender: data.gender,
                    image: imgData.data
                }
                console.log(teamMember);
                fetch(`https://perlour-new.vercel.app/teamMember`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(teamMember)
                })
                    .then(res => res.json())
                    .then(result => {
                        alert('teamMember added successfully')
                        reset();
                    })
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 gap-2 mt-20'>
                    <h2 className='text-2xl font-bold text-gray-700'>Add your Team member</h2>
                    <input {...register("name", { required: true })} type="text" placeholder="Enter Your Team-member full name" className="input input-bordered input-info w-full max-w-xs" />
                    <input {...register("comeFrom", { required: true })} type="text" placeholder="where he come from" className="input input-bordered input-info w-full max-w-xs" />
                    <input {...register("qualification", { required: true })} type="text" placeholder="Enter her qualification" className="input input-bordered input-info w-full max-w-xs" />
                    <label className='text-green-600 font-bold'>Choge a picture of your member</label>
                    <input type="file" {...register('picture', { required: true })} />
                    <label className='text-green-600 font-bold'>choge a gender</label>
                    <select {...register("gender", { required: true })}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <input className='btn btn-success' type="submit" />
                </div>
            </form>
            <div>
                

            </div>
        </div>
    );
};

export default UpdateTeam;