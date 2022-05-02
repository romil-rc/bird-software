import React, { useEffect, useRef } from 'react';
import connections from '../assets/connections.svg';
import companyLogo from '../assets/companyLogo.svg';
import dots from '../assets/dots.svg';
import '../styles/bigDiv.css';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
      VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const options = {
  scale: 0.9,
  speed: 1000,
  max: 30,
  axis: 'x'
};

const Footer = () => {
  return (
    <>
    <div className='bottom-0 sticky z-40 bg-inherit h-fit p-5 lg:p-0' id='footer'>
        <div className='flex justify-center'>
            <motion.img src={connections} className="connections" alt="conn" 
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            />
        </div>
    </div>
    <div className='lg:px-32 px-5 w-full belowfooter'>
      <Tilt options={options} id='belowFooter'>
        <p className='p-5 pb-0 lg:text-xl text-lg font-medium'>Trusted by Leading Dapp Teams and Enterprises</p>
        <div className='flex justify-center'>
          <img src={companyLogo} className="lg:w-[52rem] w-72 lg:pb-9 pb-5" alt="companylogo" />
        </div>
      </Tilt>
    </div>
    <div className='lg:flex hidden justify-end' id='dotDiv'>
      <img src={dots} alt="dots" />
    </div>
    </>
  )
}

export default Footer;