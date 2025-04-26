'use client'
import React from 'react'
import { FaSearch } from "react-icons/fa"
import Switch from '@mui/material/Switch'
import Checkbox from '@mui/material/Checkbox';
import { IoInformationCircleOutline } from "react-icons/io5";
import Link from 'next/link';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CombinedHackathonCard } from '@/components/HackathonCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const interestOptions = [
  "AI & ML",
  "Web Development",
]

const page = () => {
// start multi dropdown
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? interestOptions : interestOptions.slice(0, 5);
// end multi dropdown

// start Select
  const [Host, setHost] = React.useState('');

  const handleChange = (event) => {
    setHost(event.target.value);
  };
// for styling the select menu
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200, // control scroll height
        border: '1px solid white !important', // white border
        overflowY: 'auto',
      },
    },
  };
// end Select

// start checkbox and switch
  const labelSwitch = { inputProps: { 'aria-label': 'Switch demo' } };
  const labelCheckBox = { inputProps: { 'aria-label': 'Checkbox demo' } };
// end checkbox and switch

// start hackathon data
const hackathons = [
  {
    id: 1,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 2,
    title: "AI Innovation Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "2 weeks left",
    prize: "$50,000",
    participants: "2500",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 3,
    title: "Cyber Security Challenge",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "3 days left",
    prize: "$25,000",
    participants: "1200",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 4,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 5,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 6,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 7,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 8,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 9,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 10,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 11,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 12,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 13,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 14,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
  {
    id: 15,
    title: "Agentforce Virtual Hackathon",
    image: "/images/hackathonimg.jpeg",
    timeLeft: "about 1 month left",
    prize: "$140,000",
    participants: "3800",
    location: "Online",
    league: "Major League Hacking",
    time: "Feb 7-9, 2024",
    tags: ["AI", "ML", "Web Development"],
  },
];
//end hackathon data

//start scrolling tabs
const [value, setValue] = React.useState(0);

  const handleChangeTab = ( event , newValue ) => {
    setValue(newValue);
  };
// end scrolling tabs

  return (
    <div className='flex min-h-screen flex-col bg-[#121212]'>
      <div className='flex mt-24 py-16 items-center text-white justify-center text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
        <h2>Join the world's best online and in-person hackathons</h2>
      </div>

      <div>
        <div className="flex p-8 justify-end border border-slate-800">
          <input
          id="search" 
          placeholder="Search by hackathon title or keyword"
          type="text"
          className="block w-[70%] text-white p-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="text-slate-500 hover:text-white m-4 text-4xl"><FaSearch /></button>
        </div>

        <div className='grid grid-cols-12 mt-4'>
          <div className='col-span-3 text-[18px] px-8 py-2'>
            <div className='flex flex-col justify-start'>
              <p className='text-slate-500'>Clear filters</p>
            </div>
            <div>
              <p className='flex items-center mt-4'>
                <Switch className='text-white' {...labelSwitch} />
                <span className='text-slate-500'>Match my eligibility</span>
              </p>
            </div>
            <div>
              <p className='flex items-center text-white mt-4'>
                <Checkbox {...labelCheckBox} />
                <span>Managed by Devpost</span>
                <Link href='#'><IoInformationCircleOutline className='text-2xl mx-2'/></Link>
              </p>
            </div>
            <div>
              <div className='flex flex-col text-white mt-4'>
                <h3 className='font-bold'>Location</h3>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>Online</span></p>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>In-person</span></p>
              </div>
            </div>
            <div>
              <div className='flex flex-col text-white mt-4'>
                <h3 className='font-bold'>Status</h3>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>Upcomming</span></p>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>Online</span></p>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>Ended</span></p>
              </div>
            </div>
            <div>
              <div className='flex flex-col text-white mt-4'>
                <h3 className='font-bold'>Length</h3>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>1-6 days</span></p>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>6-12 days</span></p>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>1 month+</span></p>
              </div>
            </div>
            <div>
                <div className="text-white">
                <h3 className='font-bold'>Interest tags</h3>
                  <div className="flex flex-col mx-2 mt-1">
                    {visibleItems.map((item, index) => (
                      <div key={index}>
                        <Checkbox {...labelCheckBox} /> <span>{item}</span> 
                      </div>
                    ))}
                  </div>
                  <div className="text-slate-500 text-sm mt-2">Showing {visibleItems.length} of {interestOptions.length} items</div>
                  {showAll ? (
                    <button className='text-blue-400 cursor-pointer' onClick={() => setShowAll(false)}>Show Less</button>
                  ) : (
                    <button className='text-blue-400 cursor-pointer' onClick={() => setShowAll(true)}>Show More</button>
                  )}
                </div>
            </div>
            <div>
              <div className='flex flex-col text-white mt-4'>
                <h3 className='font-bold'>Host</h3>
                <FormControl className='rounded' sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">Host</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    value={Host}
                    label="Host"
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
            <div>
              <div className='flex flex-col text-white mt-4'>
                <h3 className='font-bold'>Open to</h3>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>Public</span></p>
                <p className='mx-2 mt-1'><Checkbox {...labelCheckBox} /><span>Invite Only</span></p>
              </div>
            </div>
          </div>
          <div className='col-span-9 text-white'>
            <div className='flex justify-between items-center mt-8'>
              <p className='flex w-[50%]'>Showing 10930 hackathons</p>
              <div className='flex w-[50%]'>
                <Tabs
                    value={value}
                    onChange={handleChangeTab}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                  >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                </Tabs>
              </div>

            </div>
            <div className="gap-4 space-y-2">  
                {hackathons.map((hackathon) => (
                    <CombinedHackathonCard key={hackathon.id} {...hackathon} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page