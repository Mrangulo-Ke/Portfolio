import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const ProjectDetail = ({ title, tech, githuburl, hosturl }) => (
  <div className="flex flex-col justify-center items-center h-full mt-8 lg:mt-0">
    <h1 className="text-3xl text-white font-helvetica underline lg:text-4xl">
      {title}
    </h1>
    <p className="text-xl text-white mt-2 lg:text-2xl lg:mt-6">
      Tech Stack :<span className="text-lg lg:text-xl"> {tech}</span>
    </p>
    <div className="mt-2 flex lg:mt-6">
      <Link href={githuburl}>
        <div className="pr-20 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-white hover:scale-105 ease-in duration-">
          <FaGithub size={30} />
        </div>
      </Link>
      <Link href={hosturl}>
        <button
          className="text-sm p-2 bg-white rounded-lg text-veryDarkBlue hover:bg-black hover:text-white 
        hover:ring-1 hover:border-2 hover:border-white"
        >
          Live Site
        </button>
      </Link>
    </div>
  </div>
);
