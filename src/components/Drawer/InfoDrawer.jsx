import { ArrowBack } from "@mui/icons-material";
import {Drawer,Box, Typography,styled} from "@mui/material";
import Profile from "./Profile";

const Component=styled(Box)`
height:85%;
background:#ededed;
`
const Text=styled(Typography)`
font-size:18px;
`

const Header=styled(Box)`
background:#20C9FF;
height:107px;
color:#FFFFFF;
display:flex;
& >svg, &>p{
  margin-top:auto;
  padding:15px;
  font-weight:600;
}
`

const drawerStyle={
  left:20,
  top:17,
  width:'30%',
  height:'95%',
  boxShadow:'none'

}
const InfoDrawer = ({open ,setOpen}) => {
    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <Drawer

    open={open}
    onClose={handleClose}
    PaperProps={{sx:drawerStyle}}
    style={{zIndex:1500}}
    >
      <Header>
        <ArrowBack onClick={()=>{setOpen(false)}}/>
        <Text>Profile</Text>


      </Header>
      <Component>
        <Profile/>

      </Component>
      
    </Drawer>
  )
}

export default InfoDrawer
