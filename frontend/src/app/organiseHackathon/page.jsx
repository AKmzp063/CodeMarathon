import {OrganizeCard1, OrganizeCard2} from '@/components/OrganizeCard';
import { Divider } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { SlGlobe } from "react-icons/sl";
import { FaPeopleLine } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";


const page = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#121212] items-center'>
      <div className='container mt-24 max-w-[50%] py-8 text-white text-center'>
        <h2 className='text-5xl'>Run better public and internal hackathons</h2>
        <h4 className='text-2xl mt-8 font-light px-14'>Plan and manage your hackathons easily with Devpost's all-in-one software, services, and community.</h4>
      </div>

      <div className='flex w-full justify-evenly mt-24 items-center'>
        <OrganizeCard1/>
        <OrganizeCard2/>
      </div>

      <div className='container mt-16 max-w-[60%] py-8 text-white text-center'>
        <h2 className='text-4xl'>You’re in good hands with Devpost</h2>
        <h4 className='text-2xl mt-8 font-light'>We’ve been powering hackathons since 2009. Our solutions simplify hackathon management, elevate the participant experience, and drive greater business outcomes.</h4>
      </div>

      <div className='container mt-16 py-8 text-white text-center'>
        <h4 className='text-md font-light'>Join the leading companies that trust Devpost to power their hackathons</h4>

        <div className="flex text-white overflow-x-auto justify-between bg-[#191919] rounded-lg mt-8 mx-16">
            <Image 
                src='/images/google.png'
                alt="google"
                width={100}
                height={100} 
                className="m-8"
            />
            <Image 
                src='/images/microsoft.png'
                alt="google"
                width={100}
                height={100} 
                className="m-8"
            />
            <Image 
                src='/images/square.png'
                alt="google"
                width={100}
                height={100} 
                className="m-8"
            />
            <Image 
                src='/images/meta.png'
                alt="google"
                width={100}
                height={100} 
                className="m-8"
            />
        </div>

        <Divider className='text-white !mt-8'/>

        <div className='container mx-auto max-w-[70%] mt-16'>
            <div className='grid grid-cols-2'>
                <div className='col-span-1 mr-8'>
                    <div className='flex flex-col items-start justify-start text-start p-4'>
                        <div className='text-5xl'><SlGlobe /></div>
                        <div className='text-slate-500 mt-3 uppercase'>
                            <p>Public hackathons</p>
                        </div>
                        <div className='text-white mt-4 text-3xl'>
                            <p>Run online hackathons that reach more developers</p>
                        </div>
                        <div className='text-white mt-12 font-light text-2xl'>
                            <p>Maximize your impact with Devpost. 
                                Our team can help you create, manage,
                                and market your competitions to ensure success.
                            </p>
                        </div>
                        <div className='flex flex-col mt-8'>
                            <div className='flex'>
                                <span className='mr-2 text-3xl'><FaPeopleLine/></span>
                                <p className='text-white font-light text-2xl'>Reach 4+ million developers</p>
                            </div>
                            <div className='flex mt-4'>
                                <span className='mr-2 text-3xl'><FaPeopleLine/></span>
                                <p className='text-white font-light text-2xl'>Drive product adoption, awareness, feedback, and ideation</p>
                            </div>
                            <div className='flex mt-4'>
                                <span className='mr-2 text-3xl'><FaPeopleLine/></span>
                                <p className='text-white font-light text-2xl'>Get end-to-end hackathon support</p>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-500 text-white'>
                            <span className='block bg-[#121212] hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-md px-5 py-3 text-2xl'>
                                Host a Public Hackathon
                            </span>
                        </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 ml-8'>
                <div className='flex flex-col items-start justify-start text-start p-4'>
                        <div className='text-5xl'><FaPeopleRoof /></div>
                        <div className='text-slate-500 mt-3 uppercase'>
                            <p>Internal hackathons</p>
                        </div>
                        <div className='text-white mt-4 text-3xl'>
                            <p>Run internal hackathons that fuel corporate innovation</p>
                        </div>
                        <div className='text-white mt-12 font-light text-2xl'>
                            <p>DFT simplifies hackathon management so you can focus on what truly matters: 
                                innovation, collaboration, and employee retention.
                            </p>
                        </div>
                        <div className='flex flex-col mt-8'>
                            <div className='flex'>
                                <span className='mr-2 text-3xl'><FaPeopleLine/></span>
                                <p className='text-white font-light text-2xl'>Engage employees and customers</p>
                            </div>
                            <div className='flex mt-4'>
                                <span className='mr-2 text-3xl'><FaPeopleLine/></span>
                                <p className='text-white font-light text-2xl'>Centralize team building, project submissions, judging, and more</p>
                            </div>
                            <div className='flex mt-4'>
                                <span className='mr-2 text-3xl'><FaPeopleLine/></span>
                                <p className='text-white font-light text-2xl'>Increase participation, time-saving, and ROI</p>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-500 text-white'>
                            <span className='block bg-[#121212] hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-md px-5 py-3 text-2xl'>
                                Host Internal Hackathon
                            </span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='container mt-16 mx-auto max-w-[70%] py-8 text-white text-center'>
        <div className='flex justify-evenly items-stretch h-full gap-6'>
            <div className='flex flex-col flex-1 border-2 border-blue-500 shadow-md shadow-blue-400 text-white text-start p-9 rounded-md'>
            <div className='text-5xl'><SlGlobe/></div>
            <div className='text-3xl mt-12 font-medium'><p>Hackathon planning guides</p></div>
            <div className='mt-8 text-2xl font-light'><p>Best practice guides for successful virtual and in-person hackathons.</p></div>
            <div className='mt-auto pt-12'>
                <button className='border-5 border-blue-500 hover:bg-blue-500 text-white px-5 py-3 rounded-md'>Download Guides</button>
            </div>
            </div>
            
            <div className='flex flex-col flex-1 border-2 border-purple-500 shadow-md shadow-purple-400 text-white text-start p-9 rounded-md'>
            <div className='text-5xl'><SlGlobe/></div>
            <div className='text-3xl mt-12 font-medium'><p>Latest blog posts</p></div>
            <div className='mt-8 text-2xl font-light'><p>Get the latest news, updates, and tips for hackathon planning.</p></div>
            <div className='mt-auto pt-12'>
                <button className='border-5 border-purple-500 hover:bg-purple-500 text-white px-5 py-3 rounded-md'>View the Blog</button>
            </div>
            </div>

            <div className='flex flex-col flex-1 border-2 border-pink-500 shadow-md shadow-pink-400 text-white text-start p-9 rounded-md'>
            <div className='text-5xl'><SlGlobe/></div>
            <div className='text-3xl mt-12 font-medium'><p>Customer success stories</p></div>
            <div className='mt-8 text-2xl font-light'><p>Don’t take our word for it. See for yourself why customers love us.</p></div>
            <div className='mt-auto pt-12'>
                <button className='border-5 border-pink-500 hover:bg-pink-500 text-white px-5 py-3 rounded-md'>Customers Stories</button>
            </div>
            </div>
        </div>
       </div>


    </div>
  );
};

export default page;