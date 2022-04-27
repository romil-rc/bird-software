import React from 'react';
import glass from '../assets/glass.png';
import timba from '../assets/timba.png';
import stick from '../assets/stick.png';
import uidi from '../assets/uidi.png';
import ellipse from '../assets/ellipse.png';
import dapps from '../assets/dapps.png';
import di from '../assets/di.png';
import smallellipse from '../assets/smallellipse.png';
import di2 from '../assets/di2.png';
import hwwi from '../assets/hwwi.png';
import onboard from '../assets/onboard.png';
import cutellipse from '../assets/cutellipse.png';
import '../styles/belowPart.css';

const BelowPart = () => {
  return (
    <div id='belowPart'>
        <div className='flex md:space-x-36 pt-32 md:pt-0' id='first'>
            <div id='left' className='text-left p-5 md:p-10 space-y-2 md:space-y-5'>
                <p className='font-semibold text-xl md:text-3xl'>We provide The Best To Protect Your Users And Their Investments</p>
                <p className='font-semibold text-md md:text-lg text-neutral-400'>Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology. </p>
            </div>
            <div className='md:flex hidden' id='right'>
                <div className='z-30'>
                    <img className='z-0' src={glass} alt="glass" id='glass' />
                    <img className='z-40' src={timba} alt="timba" id='timba' />
                    <img className='z-30' src={stick} alt="stick" id='stick' />
                </div>
                <div className='text-left space-y-10' id='over'>
                    <div>
                        <p className='text-xl font-semibold'>100+</p>
                        <p className='text-sm font-medium'>blockchain companies protected</p>
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>200+</p>
                        <p className='text-sm font-medium'>issues discovered</p>
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>10,000+</p>
                        <p className='text-sm font-medium'>analyses available per month</p>
                    </div>
                </div>
            </div>
        </div>
        <div id='defi' className='md:flex md:flex-col md:justify-around md:px-10'>
            <div className='md:flex pt-36 md:pt-0 p-5 md:p-0'>
                <div className='md:w-1/3 md:pl-24 pl-0 w-auto hidden md:flex'>
                    <img className='w-80' src={uidi} alt="uidi" />
                </div>
                <div className='text-left space-y-2 md:w-2/3 md:p-10 md:px-32'>
                    <p className='text-pink-500 font-medium'>DEFI</p>
                    <p className='font-semibold text-xl md:text-3xl'>Scale the world of DeFi</p>
                    <p className='text-slate-400 font-medium md:tracking-widest text-md md:text-lg'>Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi.</p>
                </div>
            </div>
            <div id='ellipse' className='hidden md:block'>
                <img src={ellipse} alt="" />
            </div>
            <div className='md:w-1/3 w-auto flex md:hidden'>
                <img className='w-80' src={uidi} alt="uidi" />
            </div>
        </div>
        <div id='dapps' className='md:flex justify-around p-5 md:px-10'>
            <div className='text-left space-y-2 w-auto md:w-1/2 p-0 md:px-10'>
                <p className='text-amber-500 font-medium'>DAPPS</p>
                <p className='font-semibold text-xl md:text-3xl'>Technology made easier</p>
                <p className='text-slate-400 font-medium md:tracking-widest md:w-[30rem]'>Decentralized applications have found a huge user base right in the initial stage , and therefore we as a team have gained extensive expertise into the creation of dapps.</p>
            </div>
            <div className='md:w-1/3'>
                <img src={dapps} alt="mi" id='mi' />
            </div>
        </div>
        <div id='audit' className='md:flex md:flex-col md:justify-around md:px-10'>
            <div className='md:flex md:pt-0 p-5 md:p-0'>
                <div className='md:w-1/3 md:pl-24 pl-0 w-auto hidden md:flex'>
                    <img className='w-64 h-72' src={di} alt="di" />
                </div>
                <div className='text-left space-y-2 md:w-2/3 md:px-32'>
                    <p className='text-emerald-300 font-medium'>AUDIT</p>
                    <p className='font-semibold text-xl md:text-3xl'>Stay secure and safe</p>
                    <p className='text-slate-400 font-medium md:tracking-widest text-md md:text-lg'>Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services , so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract.</p>
                    <div id='smallellipse' className='hidden md:block'>
                        <img src={smallellipse} alt="" />
                    </div>
                </div>
                <div className='p-5 w-auto flex md:hidden'>
                    <img className='w-auto' src={di} alt="di" />
                </div>
            </div>
        </div>
        <div id='expert' className='md:flex justify-around p-5 md:px-10 pt-0 md:pt-14'>
            <div className='text-left space-y-2 w-auto md:w-1/2 p-0 md:px-10'>
                <p className='text-blue-500 font-medium'>EXPERT</p>
                <p className='font-semibold text-xl md:text-3xl'>Expert Review</p>
                <p className='text-slate-400 font-medium md:tracking-widest md:w-[30rem]'>Experience the guidance of various trained professionals and developers who are with you at every phase of your projects. We not only develop your project but also give out the best recommendations for turning it into a huge success</p>
            </div>
            <div className='md:w-1/3 w-auto p-5 md:p-0'>
                <img className='md:w-80 w-full' src={di2} alt="di2" id='di2' />
            </div>
        </div>
        <div id='smartcontract' className='md:flex md:flex-col md:justify-around md:px-10'>
            <div className='md:flex md:pt-0 p-5 md:p-0'>
                <div className='md:w-1/3 md:pl-24 pl-0 w-auto hidden md:flex'>
                    <img className='w-96' src={hwwi} alt="uidi" />
                </div>
                <div className='text-left space-y-2 md:w-2/3 md:p-10 md:px-32'>
                    <p className='text-amber-500 font-medium'>SMART CONTRACT</p>
                    <p className='font-semibold text-xl md:text-3xl'>Experience the Revolution</p>
                    <p className='text-slate-400 font-medium md:tracking-widest text-md md:text-lg'>Merklabs has efficient developers with exceptional coding skills that can create any type of smart contract you desire and with scalable and secure code. You desire, we create it for you.</p>
                </div>
            </div>
            <div id='ellipse' className='hidden md:block'>
                <img src={ellipse} alt="" />
            </div>
            <div className='md:w-1/3 w-auto flex md:hidden'>
                <img className='w-full' src={hwwi} alt="uidi" />
            </div>
        </div>
        <div id='launchpad' className='md:flex justify-around p-5 md:p-0 pt-0 md:pt-24 md:px-10'>
            <div className='text-left space-y-2 w-auto md:w-1/2 p-0 md:px-10'>
                <p className='text-emerald-300 font-medium'>LAUNCHPAD</p>
                <p className='font-semibold text-xl md:text-3xl'>Stabilize and Promote</p>
                <p className='text-slate-400 font-medium md:tracking-widest md:w-[30rem]'>Amidst the competition in the Defi space, good marketing strategy and implementation plays the key role to stabilize and promote your growth in the blockchain industry. Retaining this awareness, we can develop launchpad and IDO for your presale and ICO. </p>
            </div>
            <div className='md:w-1/3 w-auto p-5 md:p-0'>
                <img src={onboard} alt="launch" id='launch' />
            </div>
        </div>
        <div className='hidden md:flex justify-end' id='cutellipse'>
            <img src={cutellipse} alt="cutellipse" />
        </div>
    </div>
  )
}

export default BelowPart;