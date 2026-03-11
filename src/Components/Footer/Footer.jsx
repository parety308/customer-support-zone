import React from 'react';

const Footer = () => {
    return (
        <div className='mt-[80px] bg-[#000000] px-5 py-3' >
            <div className='grid grid-cols-11  justify-between  gap-4'>
                <div className='flex flex-col gap-3 col-span-3'>
                    <h1 className='text-xl'>CS — Ticket System</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex flex-col gap-3 col-span-2 ml-10'>
                    <h1 className='text-xl'>Company</h1>
                    <p>About Us</p>
                    <p>Our Mission</p>
                    <p>Contact Saled</p>
                </div>
                <div className='flex flex-col gap-3 col-span-2'>
                    <h1 className='text-xl'>Services</h1>
                    <p>Products & Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                </div>
                <div className='flex flex-col gap-3 col-span-2'>
                    <h1 className='text-xl'>Information</h1>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                </div>
                <div className='flex flex-col gap-3 col-span-2'>
                    <h1 className='text-xl'>Social Links</h1>
                    <p>@CS — Ticket System</p>
                    <p>@CS — Ticket System</p>
                    <p>@CS — Ticket System</p>
                    <p>support@cst.com</p>
                </div>
            </div>
            <div className='p-3 shadow-2xl'>
            <h1 className='text-center text-xl'>© 2025 CS — Ticket System. All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;