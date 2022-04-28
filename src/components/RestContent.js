import React from 'react';
import ti from '../assets/ti.svg';
import { ChevronDownIcon } from '@heroicons/react/solid';
import neon6 from '../assets/neon6.svg';
import '../styles/restContent.css';

const RestContent = () => {
  return (
    <div className='p-5 md:p-10' id='restContent'>
        <div className='md:flex md:justify-center md:space-x-5' id="ourTeam">
            <div className='text-left md:w-96 w-auto space-y-2 md:space-y-5'>
                <p className='text-blue-500 font-medium'>OUR TEAM</p>
                <p className='font-semibold md:font-bold text-lg md:text-2xl'>MEET THE TEAM OF BEST  DEVELOPERS:</p>
                <p className='opacity-75 md:text-sm md:leading-loose'>We have a team of skilled veteran developers who exhibit amazing efficiency in their performance. With MerkLabs, you are in safe hands.  We understand your needs and give out a performance that matches your expectations.</p>
                <div className='expBtn text-left p-5 font-semibold'><p className='cursor-pointer inline-block'>Explore More</p></div>
            </div>
            <div className='md:w-[30rem] w-auto pt-3 md:pt-0'>
                <img src={ti} alt="ti" />
            </div>
        </div>
        <div className='md:flex md:justify-around md:p-5 md:pt-16 space-y-3 md:space-y-0' id="projects">
            <div className='text-left space-y-3'>
                <p className='text-cyan-400 font-medium'>PROJECTS</p>
                <p className='text-2xl font-bold w-[22rem] md:leading-relaxed'>We have completed many amazing projects that you will not believe</p>
            </div>
            <div className='opacity-50 flex md:flex md:items-center'>
                <p className='border px-3 py-1 rounded-xl flex space-x-2'>Technology<span></span><ChevronDownIcon className="h-6 w-6 text-white cursor-pointer hover:scale-110 transition-transform"/></p>
            </div>
        </div>
        <div className='md:px-44 py-10' id='hr'>
            <hr className='opacity-25' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div id='01' className='flex flex-col md:items-end'>
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
                        <div className='expBtn text-left p-5 font-semibold'><p className='cursor-pointer inline-block'>Explore More</p></div>
                    </div>
                </div>
            </div>
            <div id='02' className='flex flex-col md:items-start'>
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
                        <div className='expBtn text-left p-5 font-semibold'><p className='cursor-pointer inline-block'>Explore More</p></div>
                    </div>
                </div>
            </div>
            <div id='03' className='flex flex-col md:items-end'>
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
                        <div className='expBtn text-left p-5 font-semibold'><p className='cursor-pointer inline-block'>Explore More</p></div>
                    </div>
                </div>
            </div>
            <div id='04' className='flex flex-col md:items-start'>
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
                        <div className='expBtn text-left p-5 font-semibold'><p className='cursor-pointer inline-block'>Explore More</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:flex md:justify-end' id='neon6'>
            <img src={neon6} alt="neon6" />
        </div>
    </div>
  )
}

export default RestContent;