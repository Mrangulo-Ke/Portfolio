import Image from 'next/image';
import React from 'react';

export const Skill = ({ icon, children }) => (
  <div
    className="flex flex-col font-coolvetica justify-center items-center p-4 
  text-gray-600 rounded-xl shadow-xl hover:scale-105 ease-in duration-300"
  >
    <div className="hidden lg:flex">
      <Image src={icon} alt={children} width={80} height={100} />
    </div>
    <div className="flex lg:hidden">
      <Image src={icon} alt={children} width={30} height={36} />
    </div>
    <div className="text-base text-center md:text-xl pt-1">{children}</div>
  </div>
);
