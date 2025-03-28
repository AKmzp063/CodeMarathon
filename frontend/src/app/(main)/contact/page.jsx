'use client';
import React, { useState } from 'react';

const Page = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    return (
        <div className='flex h-auto bg-[#121212] pt-24 pb-12 w-full items-center justify-center'>
            <div className='flex flex-col w-full max-w-lg mx-auto justify-center space-y-8 px-4'>
                <h1 className='text-3xl text-center text-white font-bold md:text-left'>
                    Contact Us
                </h1>
        
                <form className="w-full space-y-6">
                    <div className="my-4">
                        <label htmlFor="Name" className="block text-sm font-medium text-slate-300">
                            Name
                        </label>
                        <input
                            required
                            id="name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            type="text"
                            className="block mx-auto w-full text-white p-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="my-4">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                            Email Address
                        </label>
                        <input
                            required
                            id="email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="abc@gmail.com"
                            type="email"
                            className="block mx-auto w-full text-white p-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="my-4">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                            Message
                        </label>
                        <textarea
                            required
                            id="message"
                            value={Message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message......"
                            rows="5"
                            className="block mx-auto w-full text-white p-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <button
                        className="my-4 w-full py-1 px-1 rounded-md bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-500 text-white"
                        type="submit"
                    >
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-md px-5 py-2'>
                            Send Mail
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
