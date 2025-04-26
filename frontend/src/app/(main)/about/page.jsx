import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className='bg-[#121212] object-cover max-w-full'>
      <Image
  src="/images/Codebg1.png"
  alt="a hackathon image"
  width={1020}  
  height={400}  
  objectFit="cover"  
  className="bg-cover h-[400px] w-full md:h-[500px] lg:h-[600px]" 
/>

      <div className="container text-white mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          At Code Marathon, we believe in learning through challenges. Here's why competitions matter:
        </h2>

        <ul className="list-disc list-inside space-y-2 text-lg font-medium">
          <li>Deadlines create urgency</li>
          <li>The best learning comes from building</li>
          <li>Prizes are awarded without taking developer IP</li>
          <li>Accomplishing a personal challenge brings satisfaction</li>
        </ul>

        <p className="mt-6 text-base">
          If you’re a developer looking to be inspired,{" "}
          <Link className="underline hover:decoration-dashed text-blue-400" href="/">
            check out our competitions.
          </Link>
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10">
          For our customers
        </h2>

        <ul className="list-disc list-inside space-y-2 text-lg font-medium">
          <li>Our fully-featured hackathon platform</li>
          <li>Our large, global community</li>
          <li>Our experienced services team</li>
        </ul>

        <p className="mt-6 text-base">
          We’re fortunate to have a broad customer base that includes corporations of all sizes, non-profits, government agencies, and universities. If you’re a potential customer, we’d love to hear from you.
        </p>

        <p className="mt-6 text-base">
          Last, but not least, our team is extraordinary, and we’re fortunate to have an impact on millions of users. Consider browsing our careers page.
        </p>
      </div>
    </div>
  )
}

export default page