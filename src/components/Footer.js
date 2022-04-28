import React from 'react'
import merk from '../assets/merk.svg';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className='md:flex md:justify-evenly space-y-7 md:space-y-0 py-3' id='fixedFooter'>
        <div className='md:flex md:flex-col md:text-left space-y-5'>
            <div className='flex md:justify-start justify-center space-x-4'>
                <img className='h-6' src={merk} alt="merk" />
                <p className='font-semibold text-xl'>Merk</p>
            </div>
            <p className='text-sm opacity-70'>Copyright © 2021</p>
            <p className='text-sm opacity-70'>Design By Merk Labs</p>
        </div>
        <div className='md:text-left space-y-3 md:space-y-5'>
            <p className='text-sm'>SERVICES</p>
            <p className='opacity-70 text-sm font-light'>Web Development</p>
            <p className='opacity-70 text-sm font-light'>App Development</p>
            <p className='opacity-70 text-sm font-light'>UI Design</p>
            <p className='opacity-70 text-sm font-light'>Consultation</p>
            <p className='opacity-70 text-sm font-light'>Maintenance</p>
        </div>
        <div className='md:text-left space-y-3 md:space-y-5'>
            <p className='text-sm'>COMPANY</p>
            <p className='opacity-70 text-sm font-light'>About</p>
            <p className='opacity-70 text-sm font-light'>Contact</p>
            <p className='opacity-70 text-sm font-light'>Send Quote</p>
            <p className='opacity-70 text-sm font-light'>Privacy Policy</p>
            <p className='opacity-70 text-sm font-light'>Term of Service</p>
            <p className='opacity-70 text-sm font-light'>Jobs</p>
        </div>
        <div className='md:text-left space-y-3 md:space-y-5'>
            <p className='text-sm'>RESOURCES</p>
            <p className='opacity-70 text-sm font-light'>Support</p>
            <p className='opacity-70 text-sm font-light'>Documentation</p>
            <p className='opacity-70 text-sm font-light'>License</p>
            <p className='opacity-70 text-sm font-light'>Sitemap</p>
        </div>
    </div>
  )
}

export default Footer;