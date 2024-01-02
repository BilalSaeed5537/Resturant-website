import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function contact() {
  return (
    <Layout>
      <Box sx={{
        my: 5, mx: 5, "& h4": {
          fontWeight: 'bold',
          mb: 2,
        }
      }}>
        <Typography variant='h4' >
          Contact To My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia porro cupiditate repudiandae! Iste doloribus beatae accusamus soluta eligendi reiciendis, praesentium reprehenderit, repudiandae minus molestiae eos sit delectus? Sit, iusto dicta?
        </p>
      </Box>
      <Box sx={{
        m: 3, width: "600px", ml: 7, "@media (max-width : 600px)": {
          width: "300px",
          justifyContent: 'center'

        }
      }}>
        <TableContainer component={Paper}>
          <Table aria-aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold' }} align='center'>
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} />0800 - 000 - 00 (Tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: 'skyblue', pt: 1 }} /> Help@myresturant.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <LocalPhoneIcon sx={{ color: 'green', pt: 1 }} />123-456-789
                </TableCell>
              </TableRow>
            </TableBody>

          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default contact
