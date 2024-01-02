import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: 'center',
        p: 3,
        "& h4": {
          fontWeight: 'bold',
          my: 2,
          fontSize: '1.5rem',
        },
        "& p": {
          textAlign: 'justify',
        },
        "@media (max-width : 600px)":{

          mt : 0
        }
      }}>

      <Typography variant='h4'>

        <h1>Welcome To My Resturant</h1>
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta reiciendis quod! Soluta, esse dolores. Consequatur, nisi aspernatur praesentium nihil accusantium odit veritatis quae in corporis voluptatem ducimus? Natus error alias laborum iusto illo. Asperiores suscipit debitis quam omnis! Est deleniti cumque soluta quasi nam dolorem modi, hic architecto consectetur repellendus aliquam. Necessitatibus, tempore! Ut modi ullam enim, culpa a neque nam praesentium ratione voluptatibus consequuntur fugiat sunt velit recusandae exercitationem, quae aliquid dicta labore laudantium! Quibusdam nulla facere accusantium accusamus explicabo, quae at fuga minus cumque iste. Eos iure error animi fugit quis velit adipisci culpa cupiditate odio enim?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla nam tempore eaque placeat quo reprehenderit cum? Quia excepturi aspernatur repellendus dolores tempora nam, dolorum amet sapiente, ab magni accusantium hic libero labore consequuntur quaerat vitae atque quos, ut corporis eum quisquam? Repudiandae autem ex nobis saepe voluptatum nisi nam, magnam hic reiciendis quibusdam consequuntur omnis, perferendis unde modi, nesciunt quis vitae! Officiis dolores modi placeat. Reiciendis tempore delectus facere earum commodi sint accusantium eveniet, harum cupiditate at laborum esse eaque doloremque repellendus exercitationem, impedit minima libero quam ipsum voluptatem fugiat vitae voluptate alias! Necessitatibus ipsum perferendis ab iure facere.
      </p>
    </Box>
    </Layout >
  )
}

export default About
