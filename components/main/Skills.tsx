import {
  first_layer_skill,
  second_layer_skill,
  third_layer_skill,
} from "@/constants";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

interface Skill {
  _id: string;
  skill_name: string;
  image: string;
  width: number;
  height: number;
  level: string;
  layer: string;
}

interface Props {
  setSkillHovered: Dispatch<SetStateAction<SkillHovered>>;
}
class SkillHovered {
  isHoverd: boolean;
  name: string;
  level: string;
  constructor(isHoverd: boolean, name: string, level: string) {
    this.isHoverd = isHoverd;
    this.name = name;
    this.level = level;
  }
}
const Skills = ({ setSkillHovered }: Props) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  useEffect(() => {
    // Fetching skills data from the API using fetch
    const fetchSkills = async () => {
      try {
        const response = await fetch(
          "https://portfolio-server-neon-rho.vercel.app/api/skill/get-all-skills"
        );
        const data = await response.json(); // Parse the JSON data from response
        setSkills(data.data); // Set the skills data in state
        console.log(data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchSkills();
  }, []);
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-[20]"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[20]">
        {skills
          .filter((skill) => skill.layer === "first_layer_skill")
          .map((image, index) => (
            <SkillDataProvider
              setSkillHovered={setSkillHovered}
              key={index}
              src={image.image}
              name={image.skill_name}
              level={image.level}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[20]">
      {skills
          .filter((skill) => skill.layer === "second_layer_skill")
          .map((image, index) => (
            <SkillDataProvider
              setSkillHovered={setSkillHovered}
              key={index}
              src={image.image}
              name={image.skill_name}
              level={image.level}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[20]">
      {skills
          .filter((skill) => skill.layer === "third_layer_skill")
          .map((image, index) => (
            <SkillDataProvider
              setSkillHovered={setSkillHovered}
              key={index}
              src={image.image}
              name={image.skill_name}
              level={image.level}
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
