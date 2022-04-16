import React from 'react'
import packageImg from '../assets/package.png';
import stepperStatus from '../assets/stepperStatus.png';
import bitcoinLogoBg from '../assets/bitcoinLogoBg.png';
import bitcoinLogo from '../assets/bitcoinLogo.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import twt from '../assets/twt.png';
import line from '../assets/line.png';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='md:flex justify-between flex-grow md:p-5 p-5'>
        <div className='md:flex flex-col space-y-20 hidden'>
            <div className='space-y-1 pt-6'>
                <p className='text-xs'>PK194-ABI</p>
                <p className='text-[10px]'>San Francisco</p>
                <img src={packageImg} className="pl-[35%]" alt="package" />
            </div>
            <div className=''>
                <img src={stepperStatus} className="pl-[45%]" alt="ss" />
            </div>
        </div>
        <div className='md:w-full w-auto md:flex md:p-10'>
            <div className='md:w-[48rem] w-auto space-y-3 md:p-0'>
                <p className='md:text-5xl text-xl font-bold text-left leading-tight'>MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS</p>
                <p className='md:w-[36rem] text-left text-lg font-semibold'>We provide blockchain development services and also assure you comprehensive security in blockchain development</p>
                <div className='expBtn text-left p-5 font-semibold'><p className='cursor-pointer inline-block'>Explore More</p></div>
            </div>
            <img src={bitcoinLogoBg} className="image1 top-64" alt="" />
            <img src={bitcoinLogo} className="image2" alt="" />
        </div>
        <div className='md:pt-32 md:pr-5 md:space-y-10 flex md:block pt-28 justify-evenly'>
            {/* <img src={socialMediaIcon} className="pt-10" alt="smgi" /> */}
            <img src={facebook} alt="smgi" className='cursor-pointer hover:scale-125 transition-transform' />
            <img src={insta} alt="smgi" className='cursor-pointer hover:scale-125 transition-transform' />
            <img src={twt} alt="smgi" className='cursor-pointer hover:scale-125 transition-transform' />
            <img src={line} className="pl-3 md:flex hidden" alt="smgi" />
        </div>
    </div>
  )
}

export default Home;