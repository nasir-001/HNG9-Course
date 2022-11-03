import React from 'react';
import ingressive from '../assets/img/ingressive.png';
import zuri from '../assets/img/zuri.png';

const Footer = () => {
  return (
    <div className='mx-4 md:mx-12 lg:w-2/3 lg:mx-auto mt-44 border-t border-gray-200'>
      <div className='md:flex pb-5 justify-between mt-7'>
        <div>
          <img src={zuri} alt="" />
        </div>
        <div className='text-gray-500 pt-4 md:pt-0'>
          HNG Internship 9 Frontend Task
        </div>
        <div className='pt-4 md:pt-0'>
          <img src={ingressive} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
