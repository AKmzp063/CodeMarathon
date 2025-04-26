'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { NavLink, NavButton } from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navlink = [
  {
    title: "Join a Hackathon", path: "/about", dropdown: [
      {
        title: "Hackathon 1", path: "/hackathon1", description: "Join Hackathon 1", dropdown1: [
          { title: "Hackathon 1.1", path: "/hackathon1_1" },
          { title: "Hackathon 1.2", path: "/hackathon1_2" }
        ]
      },
      { title: "Projects", path: "/projects", description: "Join Hackathon 2" },
    ]
  },
  {
    title: "Host a Hackathon", path: "/projects", dropdown: [
      { title: "Host Option 1", path: "/host1" },
      { title: "Host Option 2", path: "/host2" }
    ]
  }
];

const navButton = [
  { title: "Login/SignUp", path: "/auth" },
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

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`w-full md:hidden transition-all duration-300 ease-in-out ${navbarOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center bg-[#121212] py-4 space-y-4">
            {navlink.map((link, index) => (
              <li key={index} className="relative w-full text-center">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="block w-full py-2 px-4 text-[#ADB7BE] hover:text-white"
                >
                  {link.title}
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${dropdownOpen[index] ? "max-h-screen" : "max-h-0"}`}>
                  <ul className="bg-[#1E1E1E] rounded shadow-lg">
                    {link.dropdown.map((item, idx) => (
                      <li key={idx}>
                        <NavLink href={item.path} title={item.title} description={item.description} />
                        {item.dropdown1 && (
                          <ul className="pl-4">
                            {item.dropdown1.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                <NavLink href={subItem.path} title={subItem.title} />
                              </li>
                            ))}
                          </ul>
                        )}
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
                <button className="block py-2 px-4 text-[#ADB7BE] hover:text-white cursor-pointer">
                  {link.title}
                </button>

                {/* First-Level Dropdown */}
                <ul className="absolute left-0 hidden group-hover:block bg-[#1E1E1E] rounded shadow-lg z-10 min-w-max">
                  {link.dropdown.map((item, idx) => (
                    <li key={idx} className="relative group/item">
                      <NavLink href={item.path} title={item.title} description={item.description} />

                      {/* Second-Level Dropdown */}
                      {item.dropdown1 && (
                        <ul className="absolute left-full top-0 mt-0 hidden group-hover/item:block bg-[#2A2A2A] rounded shadow-lg z-20 min-w-max">
                          {item.dropdown1.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <NavLink href={subItem.path} title={subItem.title} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {navButton.map(({ path, title }, index) => (
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
