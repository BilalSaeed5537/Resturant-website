import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {Menulist} from '../data/Data'

function Menu() {
  return (
    <Layout>
      <Box sx={{display : 'flex', flexWrap : 'wrap', justifyContent : 'center'}}>
        {
         Menulist.map((item ) => (
          <Card sx={{ maxWidth : '400px', m : 2 }} >
            <CardActionArea  >
              
              <CardMedia   sx={{ minHeight: '400px' }} component={'img'} src={item.image} alt={item.name} />
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'} >
                  {item.name}
                </Typography>
                <Typography variant='body2' >
                  {item.description}
                </Typography>
              </CardContent>

            </CardActionArea>
          </Card>
        ))
        }
      </Box>
    </Layout>
  )
}

export default Menu
