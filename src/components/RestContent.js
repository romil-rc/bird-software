import React from 'react';
import ti from '../assets/ti.svg';
import { ChevronDownIcon } from '@heroicons/react/solid';
import neon6 from '../assets/neon6.svg';
import '../styles/restContent.css';
import { motion } from 'framer-motion';

const RestContent = () => {

  return (
    <div className='p-5 sm:p-5 md:p-5 lg:p-10 space-y-2' id='restContent'>
        <div className='sm:flex sm:justify-center sm:space-x-3 md:flex md:justify-center md:space-x-5 lg:flex lg:justify-center lg:space-x-5' id="ourTeam">
            <div className='text-left sm:w-1/2 md:w-1/2 lg:w-96 w-auto space-y-2 sm:space-y-5 md:space-y-5 lg:space-y-5'>
                <p className='text-blue-500 font-medium'>OUR TEAM</p>
                <p className='font-semibold sm:font-semibold md:font-bold lg:font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl'>MEET THE TEAM OF BEST  DEVELOPERS:</p>
                <p className='opacity-75 sm:text-base md:text-base lg:text-lg leading-loose sm:leading-loose md:leading-loose lg:leading-loose'>We have a team of skilled veteran developers who exhibit amazing efficiency in their performance. With MerkLabs, you are in safe hands.  We understand your needs and give out a performance that matches your expectations.</p>
                <motion.div className='expBtn text-left p-5 font-semibold'
                    whileHover={{
                        scale:1.1,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                >
                    <p className='cursor-pointer inline-block'>Explore More</p>
                </motion.div>
            </div>
            <div className='sm:w-1/2 md:w-1/2 lg:w-[30rem] w-auto pt-3 lg:pt-0'>
                <img src={ti} alt="ti" />
            </div>
        </div>
        <div className='sm:flex sm:justify-around sm:p-5 sm:pt-16 md:flex md:justify-around md:p-5 md:pt-16 lg:flex lg:justify-around lg:p-5 lg:pt-16 space-y-3 lg:space-y-0' id="projects">
            <div className='text-left space-y-3'>
                <p className='text-cyan-400 font-medium'>PROJECTS</p>
                <p className='text-2xl font-bold sm:w-[25rem] md:w-[28rem] lg:w-[22rem] sm:leading-relaxed md:leading-relaxed lg:leading-relaxed'>We have completed many amazing projects that you will not believe</p>
            </div>
            <div className='opacity-50 flex sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center'>
                <p className='border px-3 py-1 rounded-xl flex space-x-2'>Technology<span></span><ChevronDownIcon className="h-6 w-6 text-white cursor-pointer hover:scale-110 transition-transform"/></p>
            </div>
        </div>
        <div className='sm:px-24 md:px-28 lg:px-32 py-10' id='hr'>
            <hr className='opacity-25' />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4">
            <div id='01' className='flex flex-col items-center sm:items-center md:items-end lg:items-end'>
                <div className='flex justify-end'>
                    <div className='h-80 w-96 opacity-50 bg-blue-900 rounded-xl'>
                        <div className='w-full h-2/5 space-y-3 flex flex-col justify-center items-center rounded-t-xl'>
                            <div className='w-36 h-5 bg-indigo-200 opacity-40 rounded-full'></div>
                            <div className='w-24 h-5 bg-indigo-200 opacity-40 rounded-full'></div>
                        </div>
                        <div className='w-full h-3/5 bg-inherit rounded-b-xl flex flex-col justify-center items-center'>
                            <div className='w-64 h-48 bg-indigo-200 opacity-40 rounded-t-xl'></div>
                        </div>
                    </div>
                </div>
                <div className='px-16 py-5 space-y-3'>
                    <p className='font-medium opacity-30'>The Desktop App Landing Page</p>
                    <p className='text-sm opacity-80'>A landing page for desktop app</p>
                    <div className='px-10'>
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
            </div>
            <div id='02' className='flex flex-col items-center sm:items-center md:items-start lg:items-start'>
                <div className='flex justify-end'>
                    <div className='h-80 w-96 opacity-50 bg-blue-900 rounded-xl'>
                        <div className='w-full h-2/5 space-y-3 flex flex-col justify-center items-center rounded-t-xl'>
                            <div className='w-36 h-5 bg-indigo-200 opacity-40 rounded-full'></div>
                            <div className='w-24 h-5 bg-indigo-200 opacity-40 rounded-full'></div>
                        </div>
                        <div className='w-full h-3/5 bg-inherit rounded-b-xl flex flex-col justify-center items-center'>
                            <div className='w-64 h-48 bg-indigo-200 opacity-40 rounded-t-xl'></div>
                        </div>
                    </div>
                </div>
                <div className='px-16 py-5 space-y-3'>
                    <p className='font-medium opacity-30'>The Desktop App Landing Page</p>
                    <p className='text-sm opacity-80'>A landing page for desktop app</p>
                    <div className='px-10'>
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
            </div>
            <div id='03' className='flex flex-col items-center sm:items-center md:items-end lg:items-end'>
                <div className='flex justify-end'>
                    <div className='h-80 w-96 opacity-50 bg-blue-900 rounded-xl'>
                        <div className='w-full h-2/5 space-y-3 flex flex-col justify-center items-center rounded-t-xl'>
                            <div className='w-36 h-5 bg-indigo-200 opacity-40 rounded-full'></div>
                            <div className='w-24 h-5 bg-indigo-200 opacity-40 rounded-full'></div>
                        </div>
                        <div className='w-full h-3/5 bg-inherit rounded-b-xl flex flex-col justify-center items-center'>
                            <div className='w-64 h-48 bg-indigo-200 opacity-40 rounded-t-xl'></div>
                        </div>
                    </div>
                </div>
                <div className='px-16 py-5 space-y-3 z-20'>
                    <p className='font-medium opacity-30'>The Desktop App Landing Page</p>
                    <p className='text-sm opacity-80'>A landing page for desktop app</p>
                    <div className='px-10'>
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
            </div>
            <div id='04' className='flex flex-col items-center sm:items-center md:items-start lg:items-start'>
                <div className='flex justify-end'>
                    <div className='h-80 w-96 opacity-50 bg-blue-900 rounded-xl'>
                        <div className='w-full h-2/5 space-y-3 flex flex-col justify-center items-center rounded-t-xl'>
                            <div className='w-36 h-5 bg-indigo-200 opacity-40 rounded-full'></div>
                            <div className='w-24 h-5 bg-indigo-200 opacity-40 rounded-full'></div>
                        </div>
                        <div className='w-full h-3/5 bg-inherit rounded-b-xl flex flex-col justify-center items-center'>
                            <div className='w-64 h-48 bg-indigo-200 opacity-40 rounded-t-xl'></div>
                        </div>
                    </div>
                </div>
                <div className='px-16 py-5 space-y-3'>
                    <p className='font-medium opacity-30'>The Desktop App Landing Page</p>
                    <p className='text-sm opacity-80'>A landing page for desktop app</p>
                    <div className='px-10'>
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
            </div>
        </div>
        <div className='sm:flex sm:justify-end md:flex md:justify-end lg:flex lg:justify-end -z-20' id='neon6'>
            <img src={neon6} alt="neon6" />
        </div>
    </div>
  )
}

export default RestContent;