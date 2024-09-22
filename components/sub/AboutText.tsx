"use client"
import React, { Dispatch, SetStateAction } from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import  { AnimatedText } from './AnimatedText'

interface Props{
  setHovered : Dispatch<SetStateAction<boolean>>;
}
const AboutText = ({setHovered} : Props) => {
  

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            About me
          </h1>
        </motion.div>
          <motion.div
          variants={slideInFromLeft(0.5)}
          className='md:text-[2rem] lg:text-[2rem] text-[1rem] text-white font-medium mt-[10px] md:text-justify lg:text-justify mb-[15px] px-[10%] dm-italic z-[20]'
          onMouseOver={()=>{setHovered(true)}}
          onMouseLeave={()=>{setHovered(false)}}
          >
            I&#39;m <AnimatedText once text="Akash" el="h1" className="inline-block"/>,<br/> a full-stack developer with more than one and half year of hands-on experience at <span className="bebas-neue md:text-[2.5rem] lg:text-[2.5rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Vyoma Innovus Global</span> based in Kolkata.
            Proficient in <span className="bebas-neue md:text-[2.5rem] lg:text-[2.5rem] text-[2.5rem]">React <img src="/react.gif" className='text-imgs' alt="react" /> and Java</span>, I thrive on creating seamless user experiences and robust backend systems.<br/>
            Driven by a passion for learning, I stay ahead of industry trends to bring <AnimatedText once text="fresh ideas" el="h2" className="inline-block bebas-neue md:text-[2.5rem] lg:text-[2.5rem] text-[2.5rem] z-[200]"/> 
            <span><img src="/bulb.gif" className='text-imgs' alt="bulb" /></span> and <span className="bebas-neue">innovative solutions</span> <img src="/inovative-solutions.gif" className='inovative-solutions' alt="solutions" /> to every project.
          </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
           Ethos blends creativity, design, and precision
        </motion.div>
    </div>
  )
}

export default AboutText