import React from 'react'
import packageImg from '../assets/package.svg';
import stepperStatus from '../assets/stepperStatus.svg';
import bitcoinLogoBg from '../assets/bitcoinLogoBg.svg';
import bitcoinLogo from '../assets/bitcoinLogo.svg';
import facebook from '../assets/facebook.svg';
import insta from '../assets/insta.svg';
import twt from '../assets/twt.svg';
import line from '../assets/line.svg';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='lg:flex justify-between flex-grow lg:p-5 p-5'>
        <div className='lg:flex flex-col space-y-20 hidden'>
            <div className='space-y-1 pt-6'>
                <p className='text-xs'>PK194-ABI</p>
                <p className='text-[10px]'>San Francisco</p>
                <img src={packageImg} className="pl-[35%]" alt="package" />
            </div>
            <div className=''>
                <img src={stepperStatus} className="pl-[45%]" alt="ss" />
            </div>
        </div>
        <div className='lg:w-full w-auto lg:flex lg:p-10'>
            <div className='lg:w-[48rem] w-auto space-y-3 lg:p-0'>
                <p className='lg:text-5xl text-2xl font-bold text-left leading-tight'>MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS</p>
                <p className='lg:w-[36rem] text-left text-lg font-semibold'>We provide blockchain development services and also assure you comprehensive security in blockchain development</p>
                <div className='expBtn text-left p-5 font-semibold'><p className='cursor-pointer inline-block'>Explore More</p></div>
            </div>
            <img src={bitcoinLogoBg} className="image1 top-64" alt="" />
            <img src={bitcoinLogo} className="image2" alt="" />
        </div>
        <div className='lg:pt-32 lg:pr-5 lg:space-y-10 flex lg:block pt-28 justify-evenly'>
            {/* <img src={socialMediaIcon} className="pt-10" alt="smgi" /> */}
            <img src={facebook} alt="smgi" className='cursor-pointer hover:scale-125 transition-transform' />
            <img src={insta} alt="smgi" className='cursor-pointer hover:scale-125 transition-transform' />
            <img src={twt} alt="smgi" className='cursor-pointer hover:scale-125 transition-transform' />
            <img src={line} className="pl-3 lg:flex hidden" alt="smgi" />
        </div>
    </div>
  )
}

export default Home;