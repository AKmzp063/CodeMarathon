import React from 'react';
import Link from 'next/link';
import { HackathonList } from './HackathonCard';
import HackathonTable from './HackathonTable';

const Hackathon = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 p-4'>
      <div className='lg:col-span-6 p-4'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
          <h1 className='text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-0'>
            Hackathons for you
          </h1>
          <Link href='#' className='text-white text-sm'>Edit your recommendations <span className='text-purple-500'>→</span></Link>
        </div>
        <div className='mt-4'>
          <HackathonList />
        </div>
      </div>
      <div className='lg:col-span-6'>
        <HackathonTable />
      </div>
      <div className='col-span-1 lg:col-span-12 flex justify-center mt-6'>
        <button className='px-6 sm:px-12 py-3 sm:py-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 
                           text-white font-semibold rounded-lg 
                           hover:scale-105 transition-transform duration-300 
                           focus:outline-none focus:ring-2 focus:ring-purple-300'>
          View All Hackathons
        </button>
      </div>
    </div>
  );
};

export default Hackathon;