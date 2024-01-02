import { Box, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>

                <Box sx={{
                    my: 3, "& svg": {
                        fontSize: '60px',
                        cursor: 'pointer',
                        mr: 2
                    },
                    "& svg:hover":{
                        color : 'goldenrod',
                        transform : 'translateX(10px)',
                        transition : 'all 800ms'
                    }
                }}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <GitHubIcon />
                    <YouTubeIcon />

                </Box>
                <Typography variant='h5' sx={{
                    "@media (max-width: 600px)": {
                        fontSize: '1rem'
                    }
                }}>
                    All Rights Reserved &copy; Copywrite Statement
                </Typography>
            </Box>
        </>
    )
}

export default Footer
