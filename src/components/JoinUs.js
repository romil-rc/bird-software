import React, { useEffect } from 'react';
import code from '../assets/code.svg';
import scrollBar from '../assets/scrollBar.svg';
import '../styles/joinUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const JoinUs = () => {

    useEffect(()=> {
        AOS.init({ duration: 2000 });
    }, []);

  return (
    <div id='joinUs' className='md:flex md:justify-around lg:flex lg:justify-around py-10 p-5'>
        <div data-aos='fade-up' className='text-left space-y-10 md:w-96 lg:w-96 w-auto'>
            <hr className='-mb-5 bg-white h-[2px]' />
            <div className=''>
                <p className='font-semibold text-lg'>Join Us</p>
            </div>
            <div className='space-y-3'>
                <p className='font-bold text-2xl'>BE A PART OF OUR HAPPY COMMUNITY</p>
                <p className='opacity-70'>We take immense pride in our achievements and have a happy and satisfied community that trusts our work wholeheartedly. Then what are you waiting for ,come and be a part of the merklabs family, because we are here always for you.</p>
                <motion.div className='expBtn text-left p-5 font-semibold'
                    whileHover={{
                        scale:1.1,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                >
                    <p className='cursor-pointer inline-block'>Explore More</p>
                </motion.div>
            </div>
        </div>
        <div data-aos='fade-up' className='py-10 space-y-6 md:w-96 lg:w-96 w-auto'>
            <div className='flex justify-end space-x-3 md:text-sm lg:text-base text-sm'>
                <p>Node</p>
                <p>Java</p>
                <p>Curl</p>
            </div>
            <div className='flex p-2 sm:w-auto md:w-auto lg:w-[28rem] w-auto' id='code'>
                <img src={code} alt="code" />
                <img className='sm:hidden md:hidden block' src={scrollBar} alt="scroll" id='scroll' />
            </div>
        </div>
    </div>
  )
}

export default JoinUs;