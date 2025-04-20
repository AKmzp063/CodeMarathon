'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { NavLink, NavButton, NavLinkDrop } from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navlink = [
  { title: "Join a Hackathon", path: "/about", dropdown: [
      { title: "Hackathon 1", path: "/hackathon1", description: "Join Hackathon 1" },
      { title: "Hackathon 2", path: "/hackathon2", description: "Join Hackathon 2" },
    ]
  },
  { title: "Host a Hackathon", path: "/projects", dropdown: [
      { title: "Host Option 1", path: "/host1" },
      { title: "Host Option 2", path: "/host2" }
    ]
  }
];

const navButton = [
  { title: "Login/SignUp", path: "/Login_Signup" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-[#121212]">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl md:text-4xl text-white font-semibold">
          Code Marathon
        </Link>
        <div className="md:hidden">
          {/* Toggle Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`w-full md:hidden transition-all duration-300 ease-in-out ${
            navbarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center bg-[#121212] py-4 space-y-4">
            {navlink.map((link, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm-text-xl rounded md:p-0 hover:text-white"
                >
                  {link.title}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    dropdownOpen[index] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <ul className="mt-2 bg-[#1E1E1E] rounded shadow-lg">
                    {link.dropdown.map((item, idx) => (
                      <li key={idx}>
                        <NavLink href={item.path} title={item.title} />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            {navButton.map((link, index) => (
              <li key={index}>
                <NavButton href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navlink.map((link, index) => (
              <li key={index} className="relative group">
                <button
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm-text-xl rounded md:p-0 hover:text-white"
                >
                  {link.title}
                </button>
                <div className="hidden group-hover:flex absolute left-0 mt-2 bg-[#1E1E1E] rounded shadow-lg">
                  {link.dropdown.map((item, idx) => (
                    <div key={idx} className='p-3 border rounded-lg'>
                      <NavLinkDrop {...item} />
                      
                    </div>
                  ))}
                </div>
              </li>
            ))}
            {navButton.map(({path, title}, index) => (
              <li key={index}>
                <NavButton href={path} title={title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
