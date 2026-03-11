import React from 'react';
import { toast } from 'react-toastify';

const Tickets = ({ ticket ,handleProgress,handleTickets}) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;
    return (
        <div onClick={()=>{
            handleProgress(ticket);
            handleTickets(ticket);
            toast("In Progress");
            }}>
            <div className='border border-gray-200 px-5 py-3 shadow-sm rounded-xl lg:h-[150px] flex flex-col justify-center'>
                <div className='flex justify-between text-xl font-semibold'>
                    <h2>{title}</h2>
                    <h2 className={`p-1 rounded-xl flex justify-between items-center gap-1 ${status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"}`}>{status === "Open" ? (<img src="https://i.ibb.co.com/W4GKYBC2/Ellipse-22.png" alt="Open" />) : (<img src="https://i.ibb.co.com/N52gcDc/Ellipse-22-1.png" alt="In Progress" />)}{status}</h2>
                </div>
                <h2>{description}</h2>
                <div className='flex justify-between mt-1'>
                    <div className='flex justify-between gap-15'>
                        <h2>#{id}</h2>
                        <h2 className={priority === "LOW PRIORITY" ? "text-[#02A53B]" : priority === "HIGH PRIORITY" ? "text-[#F83044]" : "text-[#FEBB0C]"}>{priority}</h2>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <h2>{customer}</h2>
                        <h2 className='flex gap-1 justify-center items-center'><img src="https://i.ibb.co.com/xKV5ddN4/Vector.png" alt="" className='h-4 w-4' />{createdAt}</h2>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Tickets;