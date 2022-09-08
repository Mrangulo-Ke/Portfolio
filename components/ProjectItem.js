import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  children,
}) => (
  <Link href={projectUrl}>
    <div>
      <div
        className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group 
    hover:bg-black"
      >
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div
          className="hidden group-hover:block absolute top-[50%] left-[50%]
       translate-x-[-50%] translate-y-[-50%]"
        >
          <h3 className="text-lg text-white text-center">{title}</h3>
          <p className="pb-4 pt-2 text-sm text-white text-center">{tech}</p>
          <Link href={projectUrl}>
            <p
              className="text-center py-2 rounded-lg bg-white text-veryDarkBlue font-bold
           text-sm cursor-pointer"
            >
              more info
            </p>
          </Link>
        </div>
      </div>
      <div className="items-center justify-center py-3 text-base text-bold text-veryDarkBlue hidden md:flex">
        {children}
      </div>
    </div>
  </Link>
);
