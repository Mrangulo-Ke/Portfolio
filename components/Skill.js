import Image from 'next/image';
import React from 'react';

export const Skill = ({ icon, children }) => (
  <div
    className="flex flex-col justify-center items-center drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]
    p-4 text-veryDarkBlue rounded-xl shadow-xl hover:scale-105 ease-in duration-300"
  >
    <div className="hidden md:flex">
      <Image src={icon} alt={children} width={90} height={100} />
    </div>
    <div className="flex md:hidden">
      <Image src={icon} alt={children} width={30} height={36} />
    </div>
    <div className="text-base text-center md:text-xl pt-1">{children}</div>
  </div>
);
