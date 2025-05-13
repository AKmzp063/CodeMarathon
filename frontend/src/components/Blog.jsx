import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Link from 'next/link';



const Blog = () => {
  return (
    
    <div className='my-8 rounded-xl max-w-[25%] bg-white'>
         <Link href='/'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/projects.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <div className='mb-4 px-4 max-w-[30%] rounded-md text-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white'>
            <div>
                Lizard
            </div>
          </div>
          <div className='mb-2 text-xl text-slate-800 font-semibold'>
            <div>
                The ultimate internal hackathon planning kit
            </div>
          </div>
          <div className='mb-2 text-lg text-slate-400'>
            <Typography>
                Get the ultimate internal hackathon planning kit to help you plan and execute a successful hackathon.
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
            <button className='px-1 py-1 w-full sm:w-fit rounded-md bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-500 text-slate-800 font-semibold ml-1'>
                <Link href='/hackathon' className='block bg-[#fff] hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-md px-2 py-1/2'>
                    Share
                </Link>
            </button>
            
      </CardActions>
    </Link>
      </div>
  )
}

export default Blog
