import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Image from 'next/image';

const CustomCard = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <div style={{ position: 'relative', width: '100%', height: '140px' }}>
                    <Image
                        src="/projects.jpeg"
                        alt="green iguana"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default CustomCard