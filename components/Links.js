import Link from 'next/link';
import React from 'react';

export const SocialLink = ({ href, children }) => (
  <Link href={href}>
    <div
      className="drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-[#5651e5] shadow-veryDarkBlue 
    p-3 cursor-pointer hover:scale-105 ease-in duration-700"
    >
      {children}
    </div>
  </Link>
);

export const FooterLink = ({ href, children }) => (
  <Link href={href}>
    <div
      className="drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-veryDarkBlue shadow-veryDarkBlue 
    p-3 cursor-pointer hover:scale-105 ease-in duration-700"
    >
      {children}
    </div>
  </Link>
);
