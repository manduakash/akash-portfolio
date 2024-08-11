import {
  first_layer_skill,
  second_layer_skill,
  third_layer_skill,
} from "@/constants";
import React, { Dispatch, SetStateAction } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

interface Props{
  setSkillHovered : Dispatch<SetStateAction<SkillHovered>>;
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
const Skills = ({setSkillHovered} : Props) => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-[20]"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[20]">
        {first_layer_skill.map((image, index) => (
          <SkillDataProvider
            setSkillHovered={setSkillHovered}
            key={index}
            src={image.Image}
            name={image.skill_name}
            level={image.level}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[20]">
        {second_layer_skill.map((image, index) => (
          <SkillDataProvider
            setSkillHovered={setSkillHovered}
            key={index}
            name={image.skill_name}
            level={image.level}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[20]">
        {third_layer_skill.map((image, index) => (
          <SkillDataProvider
            setSkillHovered={setSkillHovered}
            key={index}
            name={image.skill_name}
            level={image.level}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
