import React, { useEffect, useRef } from 'react'
import satellite from '../assets/satellite.svg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import '../styles/slideContent.css';
import { Slide } from "react-awesome-reveal";
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
      VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={tilt} 
      {...rest} 
  />;
}
const options = {
  scale: 1.1,
  speed: 1000,
  max: 30
};

const SlideContent = () => {

  return (
    <Slide direction='right'>
    <div className='sm:flex sm:justify-end md:flex md:justify-end lg:flex lg:justify-end p-5 sm:p-0 md:p-0 lg:p-0' id='slideContent'>
      <div className='md:inline-flex md:justify-evenly lg:inline-flex lg:justify-evenly bg-[#041856] md:space-x-4 lg:space-x-10 rounded-lg drop-shadow-xl p-5 sm:p-5 md:p-0 lg:p-0'>
          <div className='sm:flex sm:justify-center'>
              <Tilt options={options} className=' md:w-96 lg:w-96' src={satellite} alt="sat" id='satellite' />
          </div>
          <div className='sm:flex sm:space-x-2 md:flex md:space-x-5 lg:flex lg:space-x-10'>
            <div className='text-left space-y-5 py-10 w-auto sm:w-auto md:w-96 lg:w-96'>
              <p className='underline decoration-2 underline-offset-2'>Read Article</p>
              <p className='font-semibold text-lg'>The Best Way to Avoid Data Leaks and Privacy Scandals: Don't Own Consumer Data</p>
              <p className='text-sm'>“These are companies, like intellicam, that are actually working to get our data onto personal servers so we own it, not the companies”</p>
            </div>
            <div className='flex sm:items-end md:items-end lg:items-end space-x-3 sm:space-x-2 sm:p-5 md:space-x-2 md:p-5 lg:space-x-2 lg:p-5'>
              <ChevronLeftIcon className="h-6 w-6 text-white border rounded-full cursor-pointer hover:scale-110 transition-transform"/>
              <ChevronRightIcon className="h-6 w-6 text-white border rounded-full cursor-pointer hover:scale-110 transition-transform"/>
            </div>
          </div>
      </div>
    </div>
    </Slide>
  )
}

export default SlideContent;