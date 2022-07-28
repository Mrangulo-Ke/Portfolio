import Link from 'next/link';
import React from 'react';

export const SocialLink = ({ href, children }) => (
  <Link href={href}>
    <div
      className="rounded-full shadow-lg shadow-veryDarkBlue 
    p-3 cursor-pointer hover:scale-105 ease-in duration-700"
    >
      {children}
    </div>
  </Link>
);