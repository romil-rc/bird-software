import React from 'react';
import john from '../assets/john.svg';
import invertedComas from '../assets/invertedComas.svg';
import neon7 from '../assets/neon7.svg';
import phone from '../assets/phone.svg';
import email from '../assets/email.svg';
import contactForm from '../assets/contactForm.svg';
import '../styles/why.css';

const Why = () => {
  return (
    <div id='why'>
        <p className='text-[#16FCD2] font-medium text-lg tracking-widest'>Why</p>
        <p className='font-semibold text-xl'>WHY WE ARE THE BEST?</p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-1 sm:gap-4 md:gap-4 lg:gap-4 sm:place-items-center md:place-items-center lg:place-items-center sm:py-28 md:py-28 lg:py-28 p-5 text-left">
            <div className='sm:w-auto md:w-auto lg:w-96 w-auto' id='01'>
                <p className='font-semibold text-lg'>WE UNDERSTAND YOUR NEEDS</p>
                <p className='text-xs tracking-widest opacity-70 leading-loose'>Merklabs totally relates to your concern and the significance , the security of smart contract carries , we comprehend the vulnerabilities and give out the promise of security through auditing it and removing all the errors of the smart contracts</p>
            </div>
            <div className='sm:w-auto md:w-auto lg:w-96 w-auto' id='02'>
                <p className='font-semibold text-lg'>WE VERIFY AND RECTIFY</p>
                <p className='text-xs tracking-widest opacity-70 leading-loose'>Verifying the vulnerabilities of the contract , we also provide the best suggestion for rectifications. Omitting out any bugs and making your smart contract error free .</p>
            </div>
            <div className='sm:w-auto md:w-auto lg:w-96 w-auto' id='03'>
                <p className='font-semibold text-lg'>WE HAVE ALL</p>
                <p className='text-xs tracking-widest opacity-70 leading-loose'>We not only provide you with security but also develop efficient smart contracts to suit your needs and requirements. Ranging from various categories we are here to assist the clients from creation of smart contracts to dApps and Defis.</p>
            </div>
            <div className='sm:w-auto md:w-auto lg:w-96 w-auto' id='04'>
                <p className='font-semibold text-lg'>WE ADD VALUE TO YOUR IDEAS</p>
                <p className='text-xs tracking-widest opacity-70 leading-loose'>Team Marklabs put in the best of its efforts to give out incredible results. We ensure and prioritize client satisfaction and exhibit results that match your expectations.Adding value to your projects is our ultimate goal.</p>
            </div>
        </div>

        <div id='client' className='space-y-16'>
            <div className='flex flex-col items-center space-y-5'>
                <p className='text-[#618DFF] font-medium text-lg tracking-wider'>Our Client Review</p>
                <p className='text-sm w-80 leading-loose'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
            </div>
            <div className='sm:flex sm:justify-evenly md:flex md:justify-evenly lg:flex lg:justify-evenly p-5 sm:p-0 md:p-0 lg:p-0'>
                <div className='relative p-7 w-80 h-80 border space-y-3 rounded-[20px] -z-10 bg-transparent sm:block md:block lg:block hidden'>
                    <p className='text-[#888888] text-xs text-left'>01 FEB, 2019 | TECHNOLOGY</p>
                    <p className='text-xs font-light leading-loose'>Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='flex justify-center'>
                        <img src={john} alt="" />
                    </div>
                    <p>JOHN SMITH</p>
                    <p className='text-xs font-light'>Founder of Awesomeux Technology</p>
                </div>
                <div className='sm:absolute md:absolute lg:absolute p-7 sm:w-96 md:w-96 lg:w-96 w-auto border space-y-3 rounded-lg z-20' id='overlap'>
                    <p className='text-[#888888] text-xs text-left'>01 FEB, 2019 | TECHNOLOGY</p>
                    <div className='flex'>
                        <img src={invertedComas} alt="invc" />
                        <p className='text-xs font-light leading-loose'>Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='flex justify-center'>
                        <img src={john} alt="" />
                    </div>
                    <p>JOHN SMITH</p>
                    <p className='text-xs font-light'>Founder of Awesomeux Technology</p>
                </div>
                <div className='relative p-7 w-80 h-80 border space-y-3 rounded-[20px] -z-10 bg-transparent sm:block md:block lg:block hidden'>
                    <p className='text-[#888888] text-xs text-left'>01 FEB, 2019 | TECHNOLOGY</p>
                    <p className='text-xs font-light leading-loose'>Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='flex justify-center'>
                        <img src={john} alt="" />
                    </div>
                    <p>JOHN SMITH</p>
                    <p className='text-xs font-light'>Founder of Awesomeux Technology</p>
                </div>
            </div>
        </div>
        <div id='neon7'>
            <img src={neon7} alt="" />
            <hr className='hidden sm:hidden md:block lg:block' id='hr2' />
        </div>
        <div className='sm:flex sm:justify-evenly md:flex md:justify-evenly lg:flex lg:justify-evenly' id="contact">
            <div className='text-left sm:space-y-8 md:space-y-8 lg:space-y-8 space-y-4 sm:w-96 md:w-96 lg:w-96 w-auto sm:py-5 md:py-5 lg:py-5 p-5'>
                <p className='text-[#16FCD2]'>CONTACT</p>
                <p className='sm:text-2xl md:text-2xl lg:text-2xl text-xl font-bold'>We love receiving messages from you, we are waiting for it.</p>
                <div className='flex space-x-5'>
                    <div className=''>
                        <img className='h-14 w-14' src={phone} alt="phone" />
                    </div>
                    <div className='flex flex-col justify-center text-left'>
                        <p className='opacity-50'>Phone</p>
                        <p className='font-semibold text-lg'>+62 1234 8921</p>
                    </div>
                </div>
                <div className='flex space-x-5'>
                    <div className=''>
                        <img className='h-14 w-14' src={email} alt="phone" />
                    </div>
                    <div className='flex flex-col justify-center text-left'>
                        <p className='opacity-50'>Email</p>
                        <p className='font-semibold text-lg'>support@MerkLabs.tld</p>
                    </div>
                </div>
            </div>
            <div className='sm:p-0 md:p-0 lg:p-0 p-5'>
                <img className='h-96 w-full' src={contactForm} alt="contactform" />
            </div>
        </div>
        <div className='md:flex md:justify-center md:p-0 lg:flex lg:justify-center lg:p-0 p-5' id='lastSection'>
            <div className='md:flex md:justify-center lg:flex lg:justify-center bg-white bg-opacity-5 md:space-x-3 lg:space-x-3 space-y-6 md:space-y-0 lg:space-y-0 rounded-2xl p-6'>
                <p className='font-semibold text-xl sm:w-auto md:w-96 lg:w-96 w-auto text-left'>We've prepared everything, it's time for you to tell the problem</p>
                <div className='expBtn text-left p-5 font-semibold'><p className='cursor-pointer inline-block px-3'>Send Quote</p></div>
                <div className='expBtn text-left p-5 font-semibold'><p className='cursor-pointer inline-block px-10'>Ask</p></div>
            </div>
        </div>
    </div>
  )
}

export default Why;