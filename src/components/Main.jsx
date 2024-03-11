import { FaGithub, FaGlobe, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover'
        src='https://images.unsplash.com/photo-1573496546735-c274b1fd186b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
        alt=''
      />
      <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <div className='w-full p-4  bg-black/40'>
            <h1 className='sm:text-5xl text-4xl font-bold text-blue-500'>
              I'm Yan Liu
            </h1>

            <h2 className='flex sm:text-3xl text-2xl pt-4 text-sky-300'>
              I'm a
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', // Types 'One'
                  2000, // Waits 1s
                  'Passionate Learner', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Tech Enthusiast', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                ]}
                wrapper='div'
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: '1em',
                  paddingLeft: '5px',
                }}
              />
            </h2>

            <div className='flex justify-between pt-6 max-w-[200px] w-full text-blue-500'>
              <FaLinkedinIn
                className='cursor-pointer'
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/yan-liu-phd-371b8562/'
                  );
                }}
                src=''
                size={20}
              />
              <FaGithub
                className='cursor-pointer'
                onClick={() => {
                  window.open('https://github.com/yanliu1111/');
                }}
                src=''
                size={20}
              />
              <FaGlobe
                className='cursor-pointer'
                onClick={() => {
                  window.open(
                    'https://nextjs-ts-my-markdown-blog-66cwkyso0-yanliu1111.vercel.app'
                  );
                }}
                src=''
                size={20}
              />
              <FaTwitter
                className='cursor-pointer'
                onClick={() => {
                  window.open('https://twitter.com/yanliu111');
                }}
                src=''
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
