import React from 'react'
import satellite from '../assets/satellite.svg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import '../styles/slideContent.css';

const SlideContent = () => {
  return (
    <div className='md:flex md:justify-end p-5 md:p-0' id='slideContent'>
      <div className='md:inline-flex md:justify-evenly bg-blue-900 md:space-x-10 rounded-lg drop-shadow-xl p-5 md:p-0'>
          <div>
              <img className='w-96' src={satellite} alt="sat" id='satellite' />
          </div>
          <div className='md:flex md:space-x-10'>
            <div className='text-left space-y-5 py-10 w-auto md:w-96'>
              <p className='underline decoration-2 underline-offset-2'>Read Article</p>
              <p className='font-semibold text-lg'>The Best Way to Avoid Data Leaks and Privacy Scandals: Don't Own Consumer Data</p>
              <p className='text-sm'>“These are companies, like intellicam, that are actually working to get our data onto personal servers so we own it, not the companies”</p>
            </div>
            <div className='flex md:items-end space-x-3 md:space-x-1 md:p-5'>
              <ChevronLeftIcon className="h-6 w-6 text-white border rounded-full cursor-pointer hover:scale-110 transition-transform"/>
              <ChevronRightIcon className="h-6 w-6 text-white border rounded-full cursor-pointer hover:scale-110 transition-transform"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SlideContent;