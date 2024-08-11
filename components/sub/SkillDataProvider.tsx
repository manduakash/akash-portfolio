"use client"

import React, { Dispatch, SetStateAction } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    name: string;
    level: string;
    setSkillHovered : Dispatch<SetStateAction<SkillHovered>>;
}
class SkillHovered{
    isHoverd: boolean;
    name: string;
    level: string;
    constructor(isHoverd: boolean,name: string, level: string){
        this.isHoverd = isHoverd;
        this.name = name;
        this.level = level;
    }
}
const SkillDataProvider = ({ src, width, height, index, name, level, setSkillHovered} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
  <motion.div
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index}
  transition={{delay: index * animationDelay}}
  >
    <Image
    onMouseOver={()=>{setSkillHovered(new SkillHovered(true, name, level))}}
    onMouseLeave={()=>{setSkillHovered(new SkillHovered(false, '','0'))}}
    className='rounded-md'
    src={src}
    width={width}
    height={height}
    alt='skill image'
    />
  </motion.div>
  )
}

export default SkillDataProvider