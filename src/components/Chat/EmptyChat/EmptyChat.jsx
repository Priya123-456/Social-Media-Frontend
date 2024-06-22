import React from 'react'
import {Box, Typography,styled} from "@mui/material"
import { emptyChat } from '../../Constants/Data'

const Component=styled(Box)`
background:#f8f9fa;
padding:30px 0;
text-align:center;
height:100%;


`

const Container=styled(Box)`
padding:0 200px;
`

const Image=styled('img')({
  width:400,
  marginTop:100

})
const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChat} alt="images"/>
        <Typography>Whatsapp Web</Typography>


      </Container>
      
    </Component>
  )
}

export default EmptyChat
