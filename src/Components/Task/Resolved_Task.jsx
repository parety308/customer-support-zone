import React from 'react';

const Resolved_Task = ({ ticket }) => {
    return (
        <div className='flex flex-col mb-4 shadow-sm rounded-xl  p-3 text-xl bg-green-200'>
            <h1>{ticket.title}</h1>
            <h2 className='text-green-500'>Completed</h2>
        </div>
    );
};


export default Resolved_Task;