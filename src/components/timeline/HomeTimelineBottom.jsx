import React from 'react';
import logoImg from "@/assets/image/logo.png"
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import Image from 'next/image';
import Mylink from '../homepage/navbar/Mylink';

const HomeTimelineBottom = () => {
  const navItems = [
    {
      path: "/timeline",
      text: (
        <div className='flex items-center gap-1'>
          <RiTimeLine /> <span>Timeline</span>
        </div>
      )
    },
    {
      path: "/stats",
      text: (
        <div className='flex items-center gap-1'>
          <ImStatsDots /> <span>Stats</span>
        </div>
      )
    }
  ]
  return (
    <div>
      <div className='border-b border-gray-200 py-4'>
        <div className='flex justify-between container mx-auto'>
          <Image
            alt='logo'
            src={logoImg}></Image>

          <ul className='flex gap-4 items-center'>
            {
              navItems.map((item, index) => (<Mylink
                key={index}
                href={item.path}
              >
                {item.text}
              </Mylink>))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeTimelineBottom;