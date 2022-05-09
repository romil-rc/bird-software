import React, { useEffect, useRef } from 'react';
import glass from '../assets/glass.svg';
import timba from '../assets/timba.svg';
import stick from '../assets/stick.svg';
import uidi from '../assets/uidi.svg';
import ellipse from '../assets/ellipse.svg';
import dapps from '../assets/dapps.svg';
import audit from '../assets/audit.svg';
import smallellipse from '../assets/smallellipse.svg';
import expert from '../assets/expert.svg';
import hwwi from '../assets/hwwi.svg';
import onboard from '../assets/onboard.svg';
import cutellipse from '../assets/cutellipse.svg';
import '../styles/belowPart.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VanillaTilt from 'vanilla-tilt';
import { Fade } from "react-awesome-reveal";

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

const BelowPart = () => {

    const { ref, inView } = useInView({
        // threshold: 0
    });
    const animation = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.1
                }
            })
        }
        if(!inView){
            animation.start({ x: '-100vw'})
        }
    }, [inView, animation]);

  return (
    <div ref={ref} className='sm:pb-72 md:pb-52 lg:pb-0 pb-0' id='belowPart'>
        <motion.div className='flex sm:space-x-8 md:space-x-16 lg:space-x-36 pt-32 sm:pt-32 md:pt-32 lg:pt-0' id='first' animate={animation}>
            <div id='left' className='sm:w-auto md:w-1/2 lg:w-1/2 text-left p-5 sm:p-5 md:p-5 lg:p-10 space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-5'>
                <p className='font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl'>We provide The Best To Protect Your Users And Their Investments</p>
                <p className='font-semibold text-md sm:text-base md:text-lg lg:text-xl text-neutral-400'>Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology. </p>
            </div>
            <div className='hidden sm:hidden md:w-1/2 lg:w-1/2 md:flex lg:flex' id='right'>
                <div className='z-30'>
                    <img className='z-0' src={glass} alt="glass" id='glass' />
                    <motion.img className='z-40' src={timba} alt="timba" id='timba' 
                        initial={{ opacity: 0.4 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "linear", duration: 1, repeat: Infinity, repeatType: 'mirror' }}
                    />
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
        </motion.div>
        <Fade direction='left'>
            <div id='defi' className='sm:flex sm:flex-col sm:justify-around sm:px-10 md:flex md:flex-col md:justify-around md:px-10 lg:flex lg:flex-col lg:justify-around lg:px-10'>
                <div className='sm:flex md:flex lg:flex pt-36 sm:pt-32 md:pt-0 lg:pt-0 p-5 sm:p-0 md:p-0 lg:p-0'>
                    <div className='sm:w-1/3 sm:pl-2 md:w-1/3 md:pl-5 lg:w-1/3 lg:pl-24 pl-0 w-auto hidden sm:flex md:flex lg:flex'>
                        <Tilt options={options} className='w-full' src={uidi} alt="uidi" />
                    </div>
                    <div className='text-left space-y-2 sm:w-2/3 sm:p-8 sm:px-8 md:w-2/3 md:p-8 md:px-12 lg:w-2/3 lg:p-10 lg:px-32'>
                        <p className='text-pink-500 font-medium'>DEFI</p>
                        <p className='font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl'>Scale the world of DeFi</p>
                        <p className='text-slate-400 font-medium sm:tracking-wide md:tracking-wider lg:tracking-widest text-md lg:text-lg'>Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi.</p>
                    </div>
                </div>
                <div id='ellipse' className='hidden lg:block'>
                    <img src={ellipse} alt="" />
                </div>
                <div className='lg:w-1/3 w-auto flex justify-center sm:hidden md:hidden lg:hidden'>
                    <img className='w-80' src={uidi} alt="uidi" />
                </div>
            </div>
        </Fade>
        <Fade direction='right'>
            <div id='dapps' className='sm:flex md:flex lg:flex justify-around p-5 sm:px-5 md:px-5 lg:px-10'>
                <div className='text-left space-y-2 w-auto sm:w-2/3 md:w-2/3 lg:w-2/3 p-0 sm:px-8 md:px-5 lg:px-10'>
                    <p className='text-amber-500 font-medium'>DAPPS</p>
                    <p className='font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl'>Technology made easier</p>
                    <p className='text-slate-400 font-medium sm:tracking-wide md:tracking-wider lg:tracking-widest text-md lg:text-lg'>Decentralized applications have found a huge user base right in the initial stage , and therefore we as a team have gained extensive expertise into the creation of dapps.</p>
                </div>
                <div className='flex justify-center sm:w-1/3 md:w-1/3 lg:w-1/3'>
                    <Tilt options={options} className='w-80 sm:-top-10 md:-top-24 lg:-top-36' src={dapps} alt="mi" id='mi' />
                </div>
            </div>
        </Fade>
        <Fade direction='left'>
            <div id='audit' className='sm:flex sm:flex-col sm:justify-around sm:px-10 md:flex md:flex-col md:justify-around md:px-10 lg:flex lg:flex-col lg:justify-around lg:px-10'>
                <div className='sm:flex sm:pt-0 md:flex md:pt-0 lg:flex lg:pt-0 p-5 lg:p-0'>
                    <div className='sm:w-1/3 sm:pl-0 md:w-1/3 md:pl-0 lg:w-1/3 lg:pl-24 pl-0 w-auto hidden sm:flex md:flex lg:flex'>
                        <Tilt options={options} className='w-80' src={audit} alt="di" />
                    </div>
                    <div className='text-left space-y-2 sm:w-2/3 sm:px-8 md:w-2/3 md:px-12 lg:w-2/3 lg:px-32'>
                        <p className='text-emerald-300 font-medium'>AUDIT</p>
                        <p className='font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl'>Stay secure and safe</p>
                        <p className='text-slate-400 font-medium sm:tracking-wide md:tracking-wider lg:tracking-widest text-md lg:text-lg'>Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services , so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract.</p>
                        <div id='smallellipse' className='hidden lg:block'>
                            <img src={smallellipse} alt="" />
                        </div>
                    </div>
                    <div className='p-5 w-auto flex justify-center sm:hidden md:hidden lg:hidden'>
                        <img className='w-80' src={audit} alt="di" />
                    </div>
                </div>
            </div>
        </Fade>
        <Fade direction='right'>
            <div id='expert' className='sm:flex md:flex lg:flex justify-around p-5 sm:px-5 md:px-5 lg:px-10 pt-0 lg:pt-14'>
                <div className='text-left space-y-2 w-auto sm:w-2/3 md:w-2/3 lg:w-2/3 p-0 sm:px-8 md:px-5 lg:px-10'>
                    <p className='text-blue-500 font-medium'>EXPERT</p>
                    <p className='font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl'>Expert Review</p>
                    <p className='text-slate-400 font-medium sm:tracking-wide md:tracking-wider lg:tracking-widest text-md lg:text-lg'>Experience the guidance of various trained professionals and developers who are with you at every phase of your projects. We not only develop your project but also give out the best recommendations for turning it into a huge success</p>
                </div>
                <div className='flex justify-center sm:w-1/3 md:w-1/3 lg:w-1/3 w-auto p-5 lg:p-0'>
                    <Tilt options={options} className='sm:w-80 md:w-80 lg:w-80 w-80' src={expert} alt="expert" id='expertImg' />
                </div>
            </div>
        </Fade>
        <Fade direction='left'>
            <div id='smartcontract' className='sm:flex sm:flex-col sm:justify-around sm:px-10 md:flex md:flex-col md:justify-around md:px-10 lg:flex lg:flex-col lg:justify-around lg:px-10'>
                <div className='sm:flex sm:pt-0 md:flex md:pt-0 lg:flex lg:pt-0 p-5 lg:p-0'>
                    <div className='sm:w-1/3 sm:pl-0 md:w-1/3 md:pl-0 lg:w-1/3 lg:pl-24 pl-0 w-auto hidden sm:flex md:flex lg:flex'>
                        <Tilt options={options} className='w-80' src={hwwi} alt="uidi" />
                    </div>
                    <div className='text-left space-y-2 sm:w-2/3 sm:px-8 md:w-2/3 md:px-12 lg:w-2/3 lg:p-10 lg:px-32'>
                        <p className='text-amber-500 font-medium'>SMART CONTRACT</p>
                        <p className='font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl'>Experience the Revolution</p>
                        <p className='text-slate-400 font-medium sm:tracking-wide md:tracking-wider lg:tracking-widest text-md lg:text-lg'>Merklabs has efficient developers with exceptional coding skills that can create any type of smart contract you desire and with scalable and secure code. You desire, we create it for you.</p>
                    </div>
                </div>
                <div id='ellipse' className='hidden lg:block'>
                    <img src={ellipse} alt="" />
                </div>
                <div className='p-5 lg:w-1/3 w-auto flex justify-center sm:hidden md:hidden lg:hidden'>
                    <img className='w-80' src={hwwi} alt="uidi" />
                </div>
            </div>
        </Fade>
        <Fade direction='right'>
            <div id='launchpad' className='sm:flex md:flex lg:flex justify-around p-5 lg:p-0 pt-0 lg:pt-24 sm:px-5 md:px-5 lg:px-10'>
                <div className='text-left space-y-2 w-auto sm:w-2/3 md:w-2/3 lg:w-2/3 p-0 sm:px-8 md:px-5 lg:px-10'>
                    <p className='text-emerald-300 font-medium'>LAUNCHPAD</p>
                    <p className='font-semibold text-xl sm:text-xl md:text-2xl lg:text-3xl'>Stabilize and Promote</p>
                    <p className='text-slate-400 font-medium sm:tracking-wide md:tracking-wider lg:tracking-widest text-md lg:text-lg'>Amidst the competition in the Defi space, good marketing strategy and implementation plays the key role to stabilize and promote your growth in the blockchain industry. Retaining this awareness, we can develop launchpad and IDO for your presale and ICO. </p>
                </div>
                <div className='sm:w-1/3 md:w-1/3 lg:w-1/3 w-auto p-5 lg:p-0'>
                    <Tilt options={options} src={onboard} alt="launch" id='launch' />
                </div>
            </div>
        </Fade>
        <div className='hidden lg:flex justify-end' id='cutellipse'>
            <img src={cutellipse} alt="cutellipse" />
        </div>
    </div>
  )
}

export default BelowPart;