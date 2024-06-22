import {Box,Typography,styled} from "@mui/material"
import { useContext } from "react"
import { AccountContext } from "../Context/AccountProvider"

const Description=styled(Box)`
padding:15px 20px 28px 30px;
& >p{
    font-size:13px;
    color:#8696a0;

}


`

const Image=styled('img')({
    width:200,
    height:200,
    borderRadius:'50%',
    padding:'25px 0'
})

const Wrraper=styled(Box)`
background:#ffffff;
padding:12px 30px 2px;
box-shadow:0px 1px 3px rgba(0,0,0,0.08)
& :first-child{
    font-size:13px;
    color:#009688;
    font-weight:200;

}
& :last-child{
    margin:14px 0;
    color:#4A4A4A;

}


`

const Container=styled(Box)`
justify-content:center;
display:flex;
`
const Profile = () => {
    const {account}=useContext(AccountContext);
  return (
    <>
    <Container>
    <Image src= {account.picture} alt="dp" />
    </Container>
    <Wrraper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>

    </Wrraper>
    <Description>
        <Typography>This is not your username or pin.This name will be visible to your whatsapp contacts.</Typography>

    </Description>
    <Wrraper>
        <Typography>About</Typography>
        <Typography>Busy</Typography>

    </Wrraper>
      
    </>
  )
}

export default Profile
