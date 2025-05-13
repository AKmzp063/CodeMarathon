import Blog from '@/components/Blog'
import React from 'react'

const page = () => {
  return (
    <div className='mt-16 py-8 bg-[#121212] min-h-screen'>
        <div className='container mx-auto flex justify-between items-center'>
            <Blog/>
            <Blog/>
            <Blog/>
            
        </div>
      
    </div>
  )
}

export default page
