// import React from 'react';
// import Head from 'next/head';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// const resume = () => {
//   return (
//     <>
//       <Head>
//         <title>Mwangeka Patick | Cv </title>
//         <meta
//           name="description"
//           content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
//         />
//         <link rel="icon" href="/fav.png" />
//       </Head>

//       <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
//         <h2 className="text-center">Cv</h2>
//         <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
//           <h2 className="text-center">Mwangeka Patrick</h2>
//           <div className="flex">
//             <a
//               href="https://www.linkedin.com/in/clint-briley-50056920a/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
//             </a>
//             <a
//               href="https://github.com/fireclint"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaGithub size={20} style={{ marginRight: '1rem' }} />
//             </a>
//           </div>
//         </div>
//         <h5 className="text-center underline text-[18px] py-2">Summary</h5>
//         <p>
//           Full-stack web developer with a passion for JavaScript and its
//           frameworks and libiraries. I would love to join an innovative team
//           that takes participation in creating safer and more reliable services
//           for people.
//         </p>

//         {/* Skills */}
//         <div className="text-center py-4">
//           <h5 className="text-center underline text-[18px] py-2">Skills</h5>
//           <p className="py-2">
//             <span className="font-bold">Front-End Web Developer</span>
//             <span className="px-2">|</span> JavaScript
//             <span className="px-2">|</span>React
//             <span className="px-2">|</span> HTML5
//             <span className="px-2">|</span>CSS3
//             <span className="px-2">|</span>Tailwind CSS
//             <span className="px-2">|</span>BootStrap
//             <span className="px-2">|</span> ChakraUI
//           </p>
//           <p className="py-2">
//             <span className="font-bold">Back-End Web Developer</span>
//             <span className="px-2">|</span>Node js
//             <span className="px-2">|</span>Mongo Db
//             <span className="px-2">|</span>Next js
//             <span className="px-2">|</span>REST APIs
//             <span className="px-2">|</span>SQL
//           </p>
//         </div>

//         <h5 className="text-center underline text-[18px] py-4">
//           Professional Experience
//         </h5>
//         {/* Experience */}
//         <div className="py-6">
//           <p className="italic">
//             <span className="font-bold italic">Freelance work </span>
//             <span className="px-2">|</span>Remote.
//           </p>
//           <p className="py-1 italic">www.upwork.com (July,2022 - Current)</p>
//           <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
//             <li>
//               Ensured comprehensive mobile responsive UI layouts with
//               understanding of HTML, CSS, and JavaScript.
//             </li>
//             <li>
//               Troubleshoot issues and concerns, configure operation and analytic
//               plugins, and design changes as needed.
//             </li>
//             <li>
//               Worked directly with a diverse client base to understand and
//               implement multiple technologies and programs.
//             </li>
//           </ul>
//         </div>
//         <div className="py-6">
//           <p className="italic">
//             <span className="font-bold italic">Freelance work </span>
//             <span className="px-2">|</span>Remote.
//           </p>
//           <p className="py-1 italic">
//             www.freelancer.com (Dec,2018 - Apr,2022)
//           </p>
//           <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
//             <li>
//               Ensured comprehensive mobile responsive UI layouts with
//               understanding of HTML, CSS, and JavaScript.
//             </li>
//             <li>
//               Troubleshoot issues and concerns, configure operation and analytic
//               plugins, and design changes as needed.
//             </li>
//             <li>
//               Worked directly with a diverse client base to understand and
//               implement multiple technologies and programs.
//             </li>
//             <li>
//               Platform migration managing DNS servers as well as MX records and
//               ensuring a smooth migration process.
//             </li>
//           </ul>
//         </div>
//         <h5 className="text-center underline text-[18px] py-4">Education </h5>
//         {/* Education */}
//         <div className="py-6">
//           <p className="italic">
//             <span className="font-bold">Maseno University</span>
//             <span className="px-2">|</span>KIsumu, Kenya
//           </p>
//           <p className="py-1 italic">
//             Bachelor of Science(Maths &#38; Computer Science) (2016 - Current)
//           </p>
//           <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
//             <li>
//               Lead paramedic on an ALS 911 ambulance covering rural Grayson
//               County.
//             </li>
//           </ul>
//         </div>
//         <>WORKING PROGRESS </>

//         {/* Experience */}
//         <div>
//           HIGHLIGHTED PERSONAL PROJECTS September 2021 – Present BookStore |
//           GitHub repo — This is a BookStore app that allows users to store books
//           and update progress. ● Developed user interfaces with React.js, and
//           designed a RESTful API using Ruby on Rails. ● Created dynamic forms to
//           allow users to add, edit, and/or delete books. ● Utilized Redux to
//           track and maintain the state of the application. ● Utilized
//           LocalStorage to store users reading progress. Tech Stack: HTML | CSS |
//           Javascript |
//         </div>
//         <div>
//           Link Masters | GitHub repo — This is an e-commerce webapp that
//           provides focuses on electronic devices(phones, PCs and laptops).
//           Features ● Sign in/ Sign up functionality. ● Display Products with the
//           ability to filter products ● Full cart page functionalities and
//           checkout section Tech Stack: Next js | Tailwind CSS | MongoDb | this
//           was a solo project thet i build all by myself.
//         </div>
//         <div>
//           Gadget Masters | GitHub repo — A business agency website Features
//           .responsiveness in accordance to screen size. .Display a sevrices with
//           a user friendly ui. .focus on performance optimization. Tech Stack:
//           Next js | Tailwind CSS |
//         </div>
//         <div>
//           Mwangeka portfolio website |GitHub repo —This is my portfolio website
//           Features .Display a sevrices with a user friendly ui. responsiveness
//           in accordance to screen size . focused SEO optimization and
//           performance optimization. tech stack
//         </div>
//         certification

//       </div>
//     </>
//   );
// };

// export default resume;
