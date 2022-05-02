import React, { useEffect, useRef } from 'react'
import packageImg from '../assets/package.svg';
import stepperStatus from '../assets/stepperStatus.svg';
import bitcoinLogoBg from '../assets/bitcoinLogoBg.svg';
import bitcoinLogo from '../assets/bitcoinLogo.svg';
import facebook from '../assets/facebook.svg';
import insta from '../assets/insta.svg';
import twt from '../assets/twt.svg';
import line from '../assets/line.svg';
import '../styles/home.css';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <motion.img 
        src={bitcoinLogo} 
        alt="nitcoinlogo" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration:1.5 }}
        ref={tilt} 
        {...rest} 
    />;
}

const options = {
    scale: 1.1,
    speed: 1000,
    max: 30
};

const Home = () => {

  return (
    <div className='lg:flex justify-between flex-grow lg:p-5 p-5'>
        <div className='lg:flex flex-col space-y-20 hidden'>
            <div className='space-y-1 pt-6'>
                <motion.p className='text-xs'
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}    
                >PK194-ABI</motion.p>
                <motion.p className='text-[10px]'
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}    
                >San Francisco</motion.p>
                <motion.img src={packageImg} className="pl-[35%]" alt="package" 
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}        
                />
            </div>
            <div className=''>
                <img src={stepperStatus} className="pl-[45%]" alt="ss" />
            </div>
        </div>
        <div className='lg:w-full w-auto lg:flex lg:p-10'>
            <motion.div 
                className='lg:w-[48rem] w-auto space-y-3 lg:p-0'
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            >
                <p className='lg:text-5xl text-2xl font-bold text-left leading-tight'>MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS</p>
                <p className='lg:w-[36rem] text-left text-lg font-semibold'>We provide blockchain development services and also assure you comprehensive security in blockchain development</p>
                <motion.div className='expBtn text-left p-5 font-semibold'
                    whileHover={{
                        scale:1.1,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                >
                    <p className='cursor-pointer inline-block'>Explore More</p>
                </motion.div>
            </motion.div>
            <motion.img 
                src={bitcoinLogoBg} 
                className="image1 top-64" 
                alt="bitcoinlogobg" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration:1.5 }}
            />
            <Tilt className="image2" options={options} />
        </div>
        <div className='lg:pt-32 lg:pr-5 lg:space-y-10 flex lg:block pt-28 justify-evenly'>
            {/* <img src={socialMediaIcon} className="pt-10" alt="smgi" /> */}
            <motion.img src={facebook} alt="smgi" className='cursor-pointer' 
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                whileHover={{ scale:1.2 }}
            />
            <motion.img src={insta} alt="smgi" className='cursor-pointer' 
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                whileHover={{
                    scale:1.2
                }}
            />
            <motion.img src={twt} alt="smgi" className='cursor-pointer' 
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                whileHover={{
                    scale:1.2
                }}
            />
            <img src={line} className="pl-3 lg:flex hidden" alt="smgi" />
        </div>
    </div>
  )
}

export default Home;