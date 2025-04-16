import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className='bg-[#121212]'>
      <Image
      src='/images/about.png'
      alt='an hackathon image'
      width={1200}
      height={500}
      className='w-full mt-24 h-[400] object-cover'/>

      <div className="container text-white mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Competitions inspire developers
        </h2>

        <ul className="list-disc list-inside space-y-1">
          <li>Deadlines create urgency</li>
          <li>The best learning comes from building</li>
          <li>Prizes are awarded without taking developer IP</li>
          <li>Accomplishing a personal challenge brings satisfaction</li>
        </ul>

        <p className="mt-4">
          If you’re a developer looking to be inspired,{" "}
          <Link className="underline hover:decoration-dashed" href="/">
            check out our competitions.
          </Link>
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-8">
          For our customers
        </h2>

        <ul className="list-disc list-inside space-y-1">
          <li>Our fully-featured hackathon platform</li>
          <li>Our large, global community</li>
          <li>Our experienced services team</li>
        </ul>

        <p className="mt-4">
          We’re fortunate to have a broad customer base that includes corporations of all sizes, non-profits, government agencies, and universities. If you’re a potential customer, we’d love to hear from you.
        </p>

        <p className="mt-4">
          Last, but not least, our team is extraordinary and we’re fortunate to have an impact on millions of users. Consider browsing our careers page.
        </p>
      </div>
    </div>
  )
}

export default page