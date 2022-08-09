import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import { ProjectItem } from '../components/ProjectItem';

import Html from '../public/skills/html.svg';
import Git from '../public/skills/git.svg';
import Ruby from '../public/skills/ruby.svg';
import Django from '../public/skills/django.svg';
import MongoDB from '../public/skills/mongoDB.svg';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import pizzaApp from '../public/assets/projects/pizzaapp.png';
import netflixImg from '../public/assets/projects/netflix.jpg';
import mwangekaPortfolio from '../public/assets/projects/mwangeka.png';
import gadgetMasters from '../public/assets/projects/gadgetmasters.png';
import twitchImg from '../public/assets/projects/twitch.jpg';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import About from '../components/About';
import { Skill } from '../components/Skill';
import { RiProfileLine } from 'react-icons/ri';

export default function Home() {
  return (
    <Layout title="Mwangeka Patrick">
      <div
        id="home"
        className="w-full min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div className="text-center">
            <p className="uppercase font-helvetica text-sm tracking-widest text-gray-600">
              LET&#39;S Code SOMETHING Great TOGETHER
            </p>
            <h1 className="py-4 text-veryDarkBlue drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] font-bold text-4xl lg:text-5xl">
              Hi, I&#39;m <span className="text-purpleDark-0"> Patrick</span>
            </h1>
            <h1 className="py-2 text-veryDarkBlue drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] font-bold text-4xl lg:text-5xl">
              A Full-Stack Web Developer
            </h1>
            <p
              className="py-4  text-gray-600 
            sm:max-w-[70%] m-auto text-lg lg:text-xl"
            >
              I enjoy building responsive web apps & designs using HTML5, CSS3,
              JavaScript, Next.js, Nodejs, React.js, Mongo DB, Tailwind Css,
              Charka UI, Restful APIs... I have been working on the web for
              around 3 years building freelance/learning projects.
            </p>
            <div className="items-center justify-between max-w-[330px] m-auto py-6 hidden md:flex ">
              <a
                href="https://www.linkedin.com/in/clint-briley-50056920a/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-blueDark-0 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn size={24} />
                </div>
              </a>
              <a
                href="https://github.com/Mrangulo-ke"
                target="_blank"
                rel="noreferrer"
              >
                <div className="drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-blueDark-0 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub size={24} />
                </div>
              </a>
              <Link href="/#contact">
                <div className="drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-blueDark-0 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail size={24} />
                </div>
              </Link>
              <Link href="/cv">
                <div className="drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-blueDark-0 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <RiProfileLine size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden justify-center bottom-0 md:flex">
          <Link href="/#about">
            <a>
              <div className="p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleDown
                  className="text-blueDark-0"
                  size={40}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <About />
      <div id="skills" className="w-full mt-12 p-2 min-h-screen">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="pt-28 uppercase font-helvetica text-3xl lg:text-4xl tracking-widest text-center">
            Skills
          </p>
          <h2 className="py-4 mt-6 text-center">What I Can Do</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
            <Skill icon={Html}>Html5</Skill>
            <Skill icon={Css}>Css</Skill>
            <Skill icon={Javascript}>JavaScript</Skill>
            <Skill icon={MongoDB}>MongoDB</Skill>
            <Skill icon={ReactImg}> React</Skill>
            <Skill icon={Firebase}> Nodejs</Skill>
            <Skill icon={NextJS}> Nextjs</Skill>
            <Skill icon={Tailwind}>Tailwind Css</Skill>
            <Skill icon={Github}>Github</Skill>
            <Skill icon={Ruby}>Ruby</Skill>
            <Skill icon={Django}>Django</Skill>
            <Skill icon={Git}>Git</Skill>
          </div>
        </div>
      </div>
      <div id="projects" className="w-full min-h-screen">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="pt-10 pb-4 font-helvetica uppercase text-3xl lg:text-4xl tracking-widest text-center">
            Projects
          </p>
          <h2 className="py-4 text-center">Sample projects</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectItem
              title="Mwangeka"
              backgroundImg={mwangekaPortfolio}
              projectUrl="/portfolio"
              tech="Next Js &#38; Tailwind Css"
            >
              Developer Portfolio
            </ProjectItem>
            <ProjectItem
              title="Gadget Masters"
              backgroundImg={gadgetMasters}
              projectUrl="/gadgetmasters"
              tech="Next JS &#38; Tailwind Css"
            >
              Business Website
            </ProjectItem>
            <ProjectItem
              title="pizza shop"
              backgroundImg={pizzaApp}
              projectUrl="/pizzaapp"
              tech="Next JS &#38; Tailwind Css"
            >
              E-commerce web app
            </ProjectItem>
            <ProjectItem
              title="Linkmasters"
              backgroundImg={gadgetMasters}
              projectUrl="/linkmasters"
              tech="Nextjs &#38; Tailwindcss"
            >
              Business website
            </ProjectItem>
            <ProjectItem
              title="Travel Buddy"
              backgroundImg={netflixImg}
              projectUrl="/travelcompanion"
              tech="React JS"
            >
              Travel App
            </ProjectItem>
            <ProjectItem
              title="TAlkMent"
              backgroundImg={twitchImg}
              projectUrl="/chatapp"
              tech="Next JS"
            >
              Chatt App
            </ProjectItem>
          </div>
        </div>
      </div>
      <Contact />
    </Layout>
  );
}
