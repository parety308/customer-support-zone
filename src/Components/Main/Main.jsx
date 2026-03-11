import React, { use, useState } from 'react';
import Tickets from './Tickets/Tickets';
import Task from '../Task/Task';

const Main = ({ ticketsPromise, handleProgress,InProgress ,removeProgress,resolved ,handleResolved}) => {
    const tickets = use(ticketsPromise);
    const [ticket,SetTIcket]=useState(tickets);
    const handleTickets=(t)=>{
         const newTickets=ticket.filter(tc=>tc.id!==t.id);
         SetTIcket(newTickets);
    }
    return (
        <div className='grid lg:grid-cols-5 text-[#000000] mt-[80px] mx-20 gap-4'>
            <div className=' lg:col-span-4'>
                <h1 className='text-3xl font-semibold mb-2'>Customer Tickets</h1>
                <div className=' col-span-4 grid lg:grid-cols-2   justify-center   gap-6 '>
                    {
                        ticket.map(ticket => <Tickets ticket={ticket} key={ticket.id} handleProgress={handleProgress} handleTickets={handleTickets}></Tickets>)
                    }
                </div>
            </div>
            <Task InProgress={InProgress} resolved={resolved} removeProgress={removeProgress}  handleResolved={handleResolved}></Task>
        </div>
    );
};

export default Main;
