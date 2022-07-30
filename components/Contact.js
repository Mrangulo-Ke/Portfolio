import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id="contact" className="w-full bg-black text-white min-h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 pt-24 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>

        {/* right */}

        <div className="p-4">
          <form
            className="mt-6"
            onSubmit={handleSubmit}
            action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
            method="POST"
          >
            <div className="flex flex-col gap-6 w-full py-2">
              <div className="flex flex-col">
                <input
                  className="rounded-xl bg-black text-white outline border-1 border-white
                      py-2 px-8"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="rounded-xl bg-black text-white outline border-1 border-white
                       py-2 px-8"
                  type="text"
                  name="phone"
                  value={phone}
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <input
                className="rounded-xl bg-black text-white outline border-1 border-white
                       py-2 px-8"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <input
                className="rounded-xl bg-black text-white outline border-1 border-white
                    py-2 px-8"
                type="text"
                name="subject"
                value={subject}
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <textarea
                className="rounded-xl bg-black text-white outline border-1 border-white
                     py-2 px-8"
                rows="10"
                name="message"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="p-4 text-gray-100 mt-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
