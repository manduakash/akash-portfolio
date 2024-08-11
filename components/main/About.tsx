import React, { Dispatch, SetStateAction } from "react";
import AboutText from "../sub/AboutText";

interface Props{
  setHovered : Dispatch<SetStateAction<boolean>>;
}
const About = ({setHovered} : Props) => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-[20]"
      style={{ transform: "scale(0.9)" }}
    >
      <AboutText setHovered={setHovered}/>

      
      
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          
        </div>
      </div>
    </section>
  );
};

export default About;
