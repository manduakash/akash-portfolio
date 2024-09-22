"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft
} from "@/utils/motion";
import { RxExternalLink } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  projectLink: string;
  technologies: string;
}

const ProjectCard = ({ src, title, subtitle, description, projectLink, technologies }: Props) => {
  return (
    <div className="relative md:basis-1/3 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[5]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
        unoptimized
      />

      <div className="relative p-4">
        <h1 className="text-xl font-semibold text-white border-b-[1px] align-middle"> {title} <span className="text-sm align-middle">{subtitle}</span> </h1>
        <p className="mt-2 mb-2 text-sm text-gray-300 leading-tight">{description}</p>
        <p className="mt-2 mb-2 text-xs text-gray-400 leading-tight"><span className="text-sm text-gray-300">Technologies:</span> {technologies}</p>
        <motion.a
          href={projectLink}
          variants={slideInFromLeft(1)}
          className="mt-2 py-1 px-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-[5]"
        >
          Visit website <RxExternalLink className="text-[#b49bff] h-3 w-3 inline-block alignt-middle" />
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectCard;
