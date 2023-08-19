'use client';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import Avatar from 'react-avatar';

function Header() {
  return (
    <header>
      <div className=' p-4 flex flex-col md:flex-row justify-center items-center md:justify-start shadow-md'>
        <Image
          src='/ForzaLogo.svg'
          alt='Forza Next Logo'
          width={200}
          height={200}
        />
        <div className='flex flex-1 p-3 md:p-5 items-center justify-end'>
          <form
            action=''
            className='flex space-x-5 rounded-md p-2 shadow-md '>
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-500' />
            <input
              type='text'
              placeholder='Search'
              className='bg-transparent w-40 md:w-72 border-none outline-none text-lg text-gray-500'
            />
            <button
              type='submit'
              hidden></button>
          </form>
          <div className='ml-2'>
            <Avatar
              name='Mariusz Krawczyk'
              size='50'
              color='#0077c1'
              round={true}
            />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center px-5 py-2 md:py-5'>
        <div className='flex items-center text-sm font-light p-3 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0077c1] mr-1'>
          <UserCircleIcon className='h-10 w-10 text-[#0077c1] mr-1' />
          <p>GPT is summarizing your day...</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
