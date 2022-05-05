import React from 'react'
import { Fade } from 'react-awesome-reveal';
import merk from '../assets/merk.svg';
import '../styles/footer.css';

const Footer = () => {

  return (
    <div className='sm:flex sm:justify-evenly md:flex md:justify-evenly lg:flex lg:justify-evenly space-y-7 sm:space-y-0 md:space-y-0 lg:space-y-0 py-3' id='fixedFooter'>
        <Fade direction='left'>
            <div className='sm:flex sm:flex-col sm:text-left md:flex md:flex-col md:text-left lg:flex lg:flex-col lg:text-left space-y-5'>
                <div className='flex sm:justify-start md:justify-start lg:justify-start justify-center space-x-4'>
                    <img className='h-6' src={merk} alt="merk" />
                    <p className='font-semibold text-xl'>Merk</p>
                </div>
                <p className='opacity-70'>Copyright © 2021</p>
                <p className='opacity-70'>Design By Merk Labs</p>
            </div>
        </Fade>
        <Fade direction='up'>
            <div className='sm:text-left md:text-left lg:text-left space-y-3 sm:space-y-5 md:space-y-5 lg:space-y-5'>
                <p className='text-sm'>SERVICES</p>
                <p className='opacity-70 font-light'>Web Development</p>
                <p className='opacity-70 font-light'>App Development</p>
                <p className='opacity-70 font-light'>UI Design</p>
                <p className='opacity-70 font-light'>Consultation</p>
                <p className='opacity-70 font-light'>Maintenance</p>
            </div>
            <div className='sm:text-left md:text-left lg:text-left space-y-3 sm:space-y-5 md:space-y-5 lg:space-y-5'>
                <p className='text-sm'>COMPANY</p>
                <p className='opacity-70 font-light'>About</p>
                <p className='opacity-70 font-light'>Contact</p>
                <p className='opacity-70 font-light'>Send Quote</p>
                <p className='opacity-70 font-light'>Privacy Policy</p>
                <p className='opacity-70 font-light'>Term of Service</p>
                <p className='opacity-70 font-light'>Jobs</p>
            </div>
            <div className='sm:text-left md:text-left lg:text-left space-y-3 sm:space-y-5 md:space-y-5 lg:space-y-5'>
                <p className='text-sm'>RESOURCES</p>
                <p className='opacity-70 font-light'>Support</p>
                <p className='opacity-70 font-light'>Documentation</p>
                <p className='opacity-70 font-light'>License</p>
                <p className='opacity-70 font-light'>Sitemap</p>
            </div>
        </Fade>
    </div>
  )
}

export default Footer;