import image from '../assets/img/nasir.jpg';
import share from '../assets/svg/share.svg';
import elipsis from '../assets/svg/elipsis.svg';

import React from 'react'

const ProfileSection = () => {
  return (
    <div className='mt-14'>
      <div className='flex'>
        <div className='w-1/2'></div>
        <div className='flex -ml-12'>
          <div>
            <img src={image} className='mx-auto w-20 h-2w-20 rounded-full' />
          </div>
          <div className='w-10 h-10 md:w-12 md:h-12 ml-14 lg:ml-56 rounded-full border border-gray-200 border-dashed cursor-pointer'>
            <img id='profile__img' src={share} alt="share" className='m-3.5 hidden md:block' />
            <img id='profile__img' src={elipsis} alt="share" className='mx-3 mt-4 md:hidden' />
          </div>
        </div>
      </div>
      <div className='pt-2 text-center text-2xl font-semibold -ml-2'>
        Nasir Lawal
      </div>
    </div>
  )
}

export default ProfileSection
