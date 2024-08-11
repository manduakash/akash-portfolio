'use client'
import React from 'react'
import {motion} from 'framer-motion'
import useMousePosition from '../../utils/useMousePosition';
interface Props {
    isHovered: boolean;
    isSkillHovered: SkillHovered;
}
class SkillHovered{
  isHoverd: boolean;
  name: string;
  level: string;
  constructor(isHoverd: boolean,name: string,level:string){
      this.isHoverd = isHoverd;
      this.name = name;
      this.level = level;
  }
}
const Cursor = ({isHovered,isSkillHovered} : Props) => {
  let size = 20;
  let position = 10;
    if(isHovered){
      size = 160;
      position = 80;
    }else if(isSkillHovered.isHoverd){
      size = 120;
      position = 30;
    }

    
    const {x,y} = useMousePosition();
    const variants = {
        default: {
          x: x - position,
          y: y - position,
          borderRadius: ["50%"],
        },
      };
  return (
    <motion.div className={`cursor ${isSkillHovered.isHoverd ? ' mix-blend-normal ':''}`}
    variants={variants}
    animate={"default"}
    style={{
        height: `${size}px`,
        width: `${size}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}
    transition={{type:"tween", ease: "backOut"}}
    >
      <span className='text-xs'>{ isSkillHovered.isHoverd ? isSkillHovered['name'] : ''}</span>
      <div className={`progress-container ${isSkillHovered.isHoverd ? '' : 'hidden'}`}>
        <div className={`progress-bar`} style={{width: `${isSkillHovered.level}%`}}>{isSkillHovered.level}%</div>
      </div>
    </motion.div>
  )
}

export default Cursor
