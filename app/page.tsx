'use client'
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import PreLoader from "@/components/main/PreLoader";
import Cursor from "@/components/main/Cursor";
import { useState } from "react";

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

export default function Home() {
  const [isHovered, setHovered] = useState(false);
  const [isSkillHovered, setSkillHovered] = useState(new SkillHovered(false, '','0'));
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-1">
        <Cursor isHovered={isHovered} isSkillHovered={isSkillHovered} />
        <PreLoader />
        <Hero />
        <About setHovered={setHovered}/>
        <Skills setSkillHovered={setSkillHovered}/>
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
