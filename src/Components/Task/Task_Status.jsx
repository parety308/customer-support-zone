import React from 'react';
import { toast } from 'react-toastify';

const Task_Status = ({ ticket, removeProgress,handleResolved }) => {
    return (
        <div className='flex flex-col mb-4 rounded-xl  shadow-sm p-3 text-xl'>
            <h1>{ticket.title}</h1>
            <button onClick={() => {
                removeProgress(ticket);
                handleResolved(ticket);
                toast('Completed')
            }} className="rounded-xl bg-[#02A53B] border-none mt-2 p-2">Complete</button>
        </div>
    );
};

export default Task_Status;