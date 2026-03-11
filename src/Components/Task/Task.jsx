import React from 'react';
import Task_Status from './Task_Status';
import Resolved_Task from './Resolved_Task';

const Task = ({ InProgress, removeProgress, handleResolved, resolved }) => {
    return (
        <div className='px-1 py-3'>
            <div className='shadow-sm p-1 rounded-xl mb-5'>
                <h1 className='text-2xl font-semibold mb-2'>Task Status</h1>
                {
                    InProgress.length ? (<div className=' rounded-xl p-1 mb-1'>
                        {InProgress.map(ticket => <Task_Status ticket={ticket} removeProgress={removeProgress} handleResolved={handleResolved}></Task_Status>)} </div>) :
                        (<h3>Select a ticket to add to Task Status</h3>)
                }
            </div>
            <div className='shadow-sm p-1 rounded-xl mb-5'>
                <h1 className='text-2xl font-semibold mb-2'>Resolved Task</h1>
                {
                    resolved.length ? (<div className='shadow-sm mb-1 rounded-xl p-1'>
                        {resolved.map(ticket => <Resolved_Task ticket={ticket}
                        ></Resolved_Task>)} </div>) :
                        (<h3>No resolved tasks yet.</h3>)
                }
            </div>

        </div>
    );
};

export default Task;