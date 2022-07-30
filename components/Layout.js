import { Menu, Transition } from '@headlessui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FooterLink, SocialLink } from './Links';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import Logo from '../public/assets/mwangekablacklogo.svg';
import LogoWhite from '../public/assets/mwangekawhitelogo.svg';

export default function Layout({ title, children }) {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <>
      <Head>
        <title>
          {title ? title + '- Mwangeka Patrick' : 'Mwangeka Patrick'}
        </title>
        <meta
          name="description"
          content="A full-stack web developer who loves working with JavaScript."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div>
        {/* Navbar */}
        <header>
          <nav
            className={`${
              shadow ? ' shadow-xl ease-in-out duration-300' : ''
            } fixed w-full top-0 z-[100] h-20  bg-white`}
          >
            <div className=" h-20 items-center justify-between container mx-auto px-6 pt-5 hidden md:flex">
              {/* Logo */}
              <div className="pt-2 ">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt=""
                    width="125"
                    height="50"
                    className="cursor-pointer drop-shadow-2xl "
                  ></Image>
                </Link>
              </div>
              {/* Menu Items */}
              <div className="space-x-6 flex">
                <Link href="/">
                  <a className="uppercase hover:text-darkGrayishBlue">Home</a>
                </Link>
                <Link href="/#about">
                  <a className="uppercase hover:text-darkGrayishBlue">About</a>
                </Link>
                <Link href="/#skills">
                  <a className="uppercase hover:text-darkGrayishBlue">Skills</a>
                </Link>
                <Link href="/#projects">
                  <a className="uppercase hover:text-darkGrayishBlue">
                    Projects
                  </a>
                </Link>
                <Link href="/#contact">
                  <a className="uppercase hover:text-darkGrayishBlue">
                    Contact
                  </a>
                </Link>
                <Link href="./cv">
                  <a className="uppercase hover:text-darkGrayishBlue">CV</a>
                </Link>
              </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="md:hidden">
              <Menu
                as="div"
                className="fixed left-0 top-0 w-full h-screen md:hidden"
              >
                {({ open }) => (
                  <Fragment>
                    <div>
                      <Menu.Button
                        className={`${
                          open ? ' text-veryDarkBlue ' : 'text-veryDarkBlue'
                        }
                     md:hidden flex w-full items-center justify-between py-3
                      `}
                      >
                        {open ? (
                          <div className="p-5">
                            <AiOutlineClose />
                          </div>
                        ) : (
                          <div className=" p-5 ">
                            <AiOutlineMenu />
                          </div>
                        )}
                        <Link href="/">
                          <a>
                            <Image src={Logo} width="87" height="35" alt="/" />
                          </a>
                        </Link>
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      enter="transform transition duration-100 ease-in"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transform transition duration-75 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Menu.Items
                        className="absolute origin-top-left left-0 top-0 w-[75%] 
                        sm:w-[60%] md:w-[45%] bg-white rounded-md shadow-md"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/">
                              <a
                                className={`flex uppercase items-center px-4 py-4 text-sm
                                   ${
                                     active
                                       ? 'bg-red-900 text-white'
                                       : 'text-gray-700'
                                   }`}
                              >
                                Home
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/#about">
                              <a
                                className={`flex uppercase items-center px-4 py-4 text-sm
                                   ${
                                     active
                                       ? 'bg-red-900 text-white'
                                       : 'text-gray-700'
                                   }`}
                              >
                                About
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/#skills">
                              <a
                                className={`flex uppercase items-center px-4 py-4 text-sm
                                   ${
                                     active
                                       ? 'bg-red-900 text-white'
                                       : 'text-gray-700'
                                   }`}
                              >
                                Skills
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/#projects">
                              <a
                                className={`flex uppercase items-center px-4 py-4 text-sm
                                   ${
                                     active
                                       ? 'bg-red-900 text-white'
                                       : 'text-gray-700'
                                   }`}
                              >
                                Projects
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/#contact">
                              <a
                                className={`flex uppercase items-center px-4 py-4 text-sm
                                   ${
                                     active
                                       ? 'bg-red-900 text-white'
                                       : 'text-gray-700'
                                   }`}
                              >
                                Contact
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="./cv">
                              <a
                                className={`flex uppercase items-center px-4 py-4 text-sm
                                   ${
                                     active
                                       ? 'bg-red-900 text-white'
                                       : 'text-gray-700'
                                   }`}
                              >
                                cv
                              </a>
                            </Link>
                          )}
                        </Menu.Item>

                        <div className="border-t border-gray-300 my-2">
                          <p className="w-[85%] md:w-[90%] py-4 px-4 text-xs">
                            Let&#39;s build something legendary together
                          </p>
                        </div>
                        <div className="pt-4 px-4">
                          <p className="uppercase tracking-widest text-sm text-[#5651e5]">
                            Get In Touch
                          </p>
                          <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                            <SocialLink href="https://www.linkedin.com/in/clint-briley-50056920a/">
                              <FaLinkedinIn />
                            </SocialLink>
                            <SocialLink href="https://github.com/Mrangulo-Ke">
                              <FaGithub />
                            </SocialLink>
                            <SocialLink href="/#contact">
                              <AiOutlineMail />
                            </SocialLink>
                            <SocialLink href="./cv">
                              <BsFillPersonLinesFill />
                            </SocialLink>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Fragment>
                )}
              </Menu>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-grayishwhite-0">
          <div
            className="container flex flex-col-reverse justify-between px-6 
          py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
          >
            <div
              className="flex flex-col-reverse items-center justify-between space-y-12 
          md:flex-col md:space-y-0 md:items-start"
            >
              <div
                className="mx-auto my-6 text-center text-veryDarkBlue
               text-xs md:hidden"
              >
                Copyright &copy; {new Date().getFullYear()} , all rights
                reserved, Mwangeka Patrick.
              </div>
              <div>
                <Image src={Logo} alt="" className="h-10"></Image>
              </div>

              <div className="flex justify-center space-x-2">
                <FooterLink href="https://www.linkedin.com/in/clint-briley-50056920a/">
                  <FaLinkedinIn />
                </FooterLink>
                <FooterLink href="https://github.com/Mrangulo-Ke">
                  <FaGithub />
                </FooterLink>
                <FooterLink href="/#contact">
                  <AiOutlineMail />
                </FooterLink>
                <FooterLink href="./cv">
                  <BsFillPersonLinesFill />
                </FooterLink>
              </div>
            </div>
            <div className="flex justify-around space-x-32">
              <div className="flex flex-col space-y-3 text-veryDarkBlue text-xs md:text-sm">
                <Link href="/">
                  <a className="hover:text-brightRed">Home</a>
                </Link>
                <Link href="/#about">
                  <a className="hover:text-brightRed">About</a>
                </Link>
                <Link href="/#skills">
                  <a className="hover:text-brightRed">Skills</a>
                </Link>
                <Link href="/#projects">
                  <a className="hover:text-brightRed">Projects</a>
                </Link>
                <Link href="./cv">
                  <a className="hover:text-brightRed">Cv</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-3 text-veryDarkBlue text-xs md:text-sm">
                <a className="text-">Mwangeka Patrick</a>
                <a>Kisumu, Kenya</a>
                <a>Full-Stack Developer</a>
                <a>+254113644484</a>
              </div>
            </div>
          </div>
          {/* <div className="justify-center py-2 hidden md:flex">
            <Link href="/">
              <a>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <HiOutlineChevronDoubleUp
                    className="text-[#5651e5]"
                    size={30}
                  />
                </div>
              </a>
            </Link>
          </div> */}
          <div className="justify-center">
            <div className="hidden text-center text-veryDarkBlueer text-sm md:block">
              Copyright &copy; 2022, All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
