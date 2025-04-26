import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>The Home for{" "}</span>
            Hackathons
        </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Assemble.Inovate.Conquer
        </p>
        <div>
            <button className='px-1 py-1 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-500 text-white'>
                <Link href='/organiseHackathon' className='block bg-[#121212] hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-md px-5 py-2'>
                    For Organizers
                </Link>
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-md bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-500 text-white mt-4'>
                <Link href='/hackathon' className='block bg-[#121212] hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-md px-5 py-2'>
                    For Participants
                </Link>
            </button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#121212] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image 
            src='/images/heroimg.png'
            alt='hero-image'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={800}
            height={800}
            />
            </div>
        </div>
    </div>
  )
}

export default HeroSection