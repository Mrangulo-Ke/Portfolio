import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import s from '../styles/skills.module.css';

import AboutImg from '../public/assets/ab.jpg';
import { useContext } from 'react';
import { createContext, useRef } from 'react';

const opacityForBlock = (sectionProgress, blockNO) => {
  const progress = sectionProgress - blockNO;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};
export const ScrollContext = createContext({ scrollY: 1 });

export default function About() {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef();

  const numOfPages = 4;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      id="about"
      className="bg-black text-gray-400 w-full min-h-screen p-2 flex flex-col items-center py-16"
    >
      <p className="uppercase text-gray-50 font-helvetica mt-8 text-3xl lg:text-4xl tracking-widest">
        About Me
      </p>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-center md:text-left">
          <h2 className="py-4 text-gray-100">Who I Am</h2>
          <div className="py-2 font-coolvetica mb-8 text-gray-200 text-xl lg:text-2xl">
            &ldquo;Basically I am Javascript developer&rdquo;
          </div>
          <span
            className={`${s.skillText} inline-block text-xl after:content-['_']  lg:text-2xl text-left`}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            I am freelancer full-stack developer.I have been freelancing on the
            freelancer platform for the past two &#38; half years until April,
            2022.
            <span
              className={`${s.skillText} inline-block after:content-['_'] text-xl text-left lg:text-2xl`}
              style={{
                opacity: opacityForBlock(progress, 0),
              }}
            >
              During that time I gained great experience while working at
              several web projects ranging from complex e-commerce web-apps to
              simple portfolios and landing pages.I recently decided to switch
              to the upwork freelancing platform.
            </span>
          </span>
          <span
            className={`${s.skillText} inline-block text-xl lg:text-2xl text-left`}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            I am computer science student at Maseno University, Kisumu ,Kenya.I
            mostly enjoy working with javascript and its libiraries. When not I
            programming I love playing video games(Fifa), watching football
            games and traveling.
          </span>
          <Link href="/#projects">
            <p className="py-2 text-blueDark-0 underline cursor-pointer hidden md:flex">
              My latest projects.
            </p>
          </Link>
        </div>
        <div
          className="hidden w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center 
        justify-center p-4 hover:scale-105 ease-in duration-300 md:flex"
        >
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}
