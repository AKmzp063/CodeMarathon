'use client'
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import Hackathon from "@/components/Hackathon";
import FeaturedList from "@/components/HackathonFeatured";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      </div>
      <div className="text-white text-center md:text-start mx-16 mt-8 mb-4">
      Trusted by the world's leading organizations
      </div>
      <div className="flex text-white overflow-x-auto justify-between bg-[#191919] rounded-lg mx-16">
        <Image 
        src='/images/google.png'
        alt="google"
        width={100}
        height={100} 
        className="m-8"/>
        <Image 
        src='/images/microsoft.png'
        alt="google"
        width={100}
        height={100} 
        className="m-8"/>
        <Image 
        src='/images/square.png'
        alt="google"
        width={100}
        height={100} 
        className="m-8"/>
        <Image 
        src='/images/meta.png'
        alt="google"
        width={100}
        height={100} 
        className="m-8"/>
      </div>

      <div className="flex m-8 justify-center">
       <input
       id="search" 
       placeholder="Find your next hackathon"
       type="text"
       className="block w-[70%] text-white p-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
       />
       <button className="text-slate-500 hover:text-white m-4 text-4xl"><FaSearch /></button>
      </div>
      <div className="container mt-4 mx-auto">
      <Hackathon/>
      </div>
      <div className="my-4">
      <FeaturedList/>
      </div>
    </div>
  );
}
