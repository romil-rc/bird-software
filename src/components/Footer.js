import React from 'react';
import '../styles/footer.css';
import connections from '../assets/connections.png';
import companyLogo from '../assets/companyLogo.png';

const Footer = () => {
  return (
    <>
    <div className='bottom-0 sticky z-50 bg-inherit h-fit p-5 md:p-0' id='footer'>
        <div className='flex justify-center'>
            <img src={connections} className="connections" alt="conn" />
        </div>
    </div>
    <div className='md:px-32 px-5 w-full belowfooter'>
      <div id='belowFooter'>
        <p className='p-5 pb-0 md:text-xl text-lg font-medium'>Trusted by Leading Dapp Teams and Enterprises</p>
        <div className='flex justify-center'>
          <img src={companyLogo} className="md:w-[52rem] w-72 md:pb-9 pb-5" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;