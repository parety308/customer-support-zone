import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="navbar shadow-md px-10 mb-[80px] py-4 bg-[#FFFFFF]">
                <div className="flex-1">
                    <button className='text-[#130B2D] font-semibold text-xl'>CS — Ticket System</button>
                </div>
                <div className="text-[#000000] flex justify-between items-center gap-6">
                    <button className='rounded-xl p-2 '>Home</button>
                    <button className='rounded-xl p-2 '>FAQ</button>
                    <button className='rounded-xl p-2 '>Changelog</button>
                    <button className='rounded-xl p-2 '>Blog</button>
                    <button className='rounded-xl p-2 '>Download</button>
                    <button className='rounded-xl p-2 '>Contact</button>
                    <button className='rounded-xl p-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white '>+ New Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;