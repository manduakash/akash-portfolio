"use client";
import React, { useEffect, useState } from "react";

const PreLoader = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
  },[]);

  return (
    <div className={`fixed flex flex-col bg-[#030014] h-full w-full ${isLoaded?'hideLoader':'z-[999]'} `} id="preloader">
      <div className="absolute h-full w-full bg-[#030014] z-[1000] opacity-[80%] flex flex-col items-center justify-center">
        <img src="/space-loader.jpg" className="absolute h-full w-full z-[1001] object-cover" alt="loading-background"/>
        <div className="absolute h-full w-full z-[1002] opacity-[80%] gradient-bg"></div>
        <img src="/astronaut.gif" className="astronaut h-[15rem] w-[15rem] z-[1003] object-cover my-0 py-0" alt="loading"/>
        <h1 className="text-white my-0 py-0 z-[1003] text-monospace">Loading...</h1>
      </div>
      
    </div>
  );
};

export default PreLoader;
