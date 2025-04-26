'use client'
import { Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { useState } from 'react'
import CustomCard from '@/components/Card'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const page = () => {
    // start Select
      const [filter, setfilter] = useState('');
    
      const handleChange = (event) => {
        setfilter(event.target.value);
      };
    // for styling the select menu
      const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: 200, // control scroll height
            overflowY: 'auto',
          },
        },
      };
    // end Select

  return (
    <div className='flex min-h-screen flex-col bg-[#121212]'>
        <div className='flex mt-24 py-16 px-8 items-center text-white justify-between font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
            <h2 className='text-4xl'>Explore projects from Portfolios and hackathons</h2>
            <Divider className='text-white'/>
            <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-gradient-to-l'>
                <Link href='/' className='flex items-center justify-center'>
                    Add Your Project
                </Link>
            </button>
        </div>
        <div className='flex justify-between items-center w-[100%] h-[80px] bg-black rounded-[5px] relative'>
            <IoSearch className='text-slate-200 ml-6 text-[30px]'/>
            <input type="text" placeholder='Search projects by keyword,#tag,@username,and more....' className='w-full h-[35px] focus:outline-none bg-inherit text-slate-200 p-2 text-[20px]' />
            <div>
              <div className='flex flex-col text-white'>
                <FormControl className='rounded' sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">filter</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    value={filter}
                    label="filter"
                    onChange={handleChange}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={1}>Major League Hacking</MenuItem>
                    <MenuItem value={2}>Microsoft</MenuItem>
                    <MenuItem value={3}>Amazon</MenuItem>
                    <MenuItem value={4}>Facebook</MenuItem>
                    <MenuItem value={5}>Google</MenuItem>
                    <MenuItem value={6}>Thirty</MenuItem>
                    <MenuItem value={7}>Ten</MenuItem>
                    <MenuItem value={8}>Twenty</MenuItem>
                    <MenuItem value={9}>Thirty</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={11}>Twenty</MenuItem>
                    <MenuItem value={12}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
        </div>

        <div className='!container mx-auto px-12 py-4'>
            <div className='mt-12'>
                <div className='flex justify-between text-white'>
                    <h3 className=' text-3xl'>Staff Picks</h3>
                    <button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-2 py-1 rounded-md'>
                        <span>View more</span>
                    </button>
                </div>
                <div className='mt-8'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[]}
                    className="mySwiper"
                >
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                </Swiper>
                </div>
            </div>

            <div className='mt-8'>
                <div className='flex justify-between text-white'>
                    <h3 className=' text-3xl'>Popular</h3>
                    <button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-2 py-1 rounded-md'>
                        <span>View more</span>
                    </button>
                </div>
                <div className='mt-8'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[]}
                    className="mySwiper"
                >
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                </Swiper>
                </div>
            </div>

            <div className='mt-8'>
                <div className='flex justify-between text-white'>
                    <h3 className=' text-3xl'>Built at Google Chrome Built-in AI Challenge</h3>
                    <button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-2 py-1 rounded-md'>
                        <span>View more</span>
                    </button>
                </div>
                <div className='mt-8'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[]}
                    className="mySwiper"
                >
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                </Swiper>
                </div>
            </div>

            <div className='mt-8'>
                <div className='flex justify-between text-white'>
                    <h3 className=' text-3xl'>Built with Flutter</h3>
                    <button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-2 py-1 rounded-md'>
                        <span>View more</span>
                    </button>
                </div>
                <div className='mt-8'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[]}
                    className="mySwiper"
                >
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                    <SwiperSlide><CustomCard/></SwiperSlide>
                </Swiper>
                </div>
            </div>

            <div className='mt-8'>
                <div className='flex justify-between text-white'>
                    <h3 className=' text-3xl'>Trending tags</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page