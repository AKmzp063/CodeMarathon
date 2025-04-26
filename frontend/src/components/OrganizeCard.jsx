import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

  
const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 34 }}>
          Code Marathon
        </Typography>
        <Typography variant="body2" className='!max-w-[70%]'>
            Get your tools in the hands of developers around the world with Code Marathon.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" className='!border-2 !border-blue-400'>Host Public Hackathons</Button>
      </CardActions>
    </React.Fragment>
);

const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 34 }}>
          Code Marathon for Teams
        </Typography>
        <Typography variant="body2" className='!max-w-[70%]'>
            Drive employee and customer innovation in less time with Code Marathon for Teams.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" className='!border-2 !border-blue-400'>Host Internal Hackathons</Button>
      </CardActions>
    </React.Fragment>
);

export const OrganizeCard1 = () => {
  return (
    <div>
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" className='!shadow-md !shadow-blue-400/50'>
                {card1}
            </Card>
        </Box>
    </div>
  )
}

export const OrganizeCard2 = () => {
    return (
      <div>
          <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined" className='!shadow-md !shadow-blue-400/50'>
                  {card2}
              </Card>
          </Box>
      </div>
    )
  }