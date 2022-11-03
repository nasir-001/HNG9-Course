import { Route } from 'react-router-dom';
import React from 'react';
import slack from '../assets/svg/slack.svg';
import github from '../assets/svg/github.svg'

const LinksSection = () => {
  return (
    <div className='lg:mx-8'>
      <div className='mx-4 md:mx-12 lg:w-2/3 lg:mx-auto mt-12'>
        <a className='font-semibold' id='twitter' href="http://twitter.com/_code_for_fun" target="_blank" rel="noopener noreferrer">
          <div className='bg-gray-200 text-center w-full py-3 h-12 rounded-lg'>
            Twitter Link
          </div>
        </a>
        <div className='mt-4'>
          <a type='submit' className='font-semibold' id='btn__zuri' href="https://training.zuri.team/" target="_blank" rel="noopener noreferrer">
            <div className='bg-gray-200 text-center w-full py-3 h-12 rounded-lg'>
              Zuri Team
            </div>
          </a>
        </div>
        <div className='mt-4'>
          <a type='submit' className='font-semibold' id='books' href="http://books.zuri.team" target="_blank" rel="noopener noreferrer">
            <div className='bg-gray-200 text-center w-full py-3 h-12 rounded-lg'>
              Zuri Books
            </div>
          </a>
        </div>
        <div className='mt-4'>
          <a type='submit' className='font-semibold' id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=Nasir" target="_blank" rel="noopener noreferrer">
            <div className='bg-gray-200 text-center w-full py-3 h-12 rounded-lg'>
              Python Books
            </div>
          </a>
        </div>
        <div className='mt-4'>
          <a type='submit' className='font-semibold' id='pitch' href="https://background.zuri.team" target="_blank" rel="noopener noreferrer">
            <div className='bg-gray-200 text-center w-full py-3 h-12 rounded-lg'>
              Background Check for Coders
            </div>
          </a>
        </div>
        <div className='mt-4'>
          <a type='submit' className='font-semibold' id='book__design' href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer">
            <div className='bg-gray-200 text-center w-full py-3 h-12 rounded-lg'>
              Design Books
            </div>
          </a>
        </div>
        <div className='mt-4'>
          <a type='submit' className='font-semibold' id='book__design' href="/contact" rel="noopener noreferrer">
            <div className='bg-gray-200 text-center w-full py-3 h-12 rounded-lg'>
              Contact
            </div>
          </a>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='mx-2'>
            <a href="https://hng9.slack.com/archives/D0487REQHD5" target="_blank" rel="noopener noreferrer">
              <img src={slack} alt="slack" />
            </a>
          </div>
          <div className='mx-2'>
            <a href="https://github.com/nasir-001" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinksSection
