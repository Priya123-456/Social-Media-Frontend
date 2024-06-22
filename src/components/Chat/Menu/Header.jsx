import { useContext ,useState} from "react"
import { AccountContext } from "../../Context/AccountProvider"
import {Box,styled} from "@mui/material"
import {Chat as MessageIcon} from '@mui/icons-material';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../Drawer/InfoDrawer"

const Component=styled(Box)`
height:44px;
padding: 8px 16px ;
background:#ededed;
display:flex;
align-items:center;

`

const Wrapper=styled(Box)`
margin-left:auto;
& > *{
    margin-left:2px;
    padding:8px;
    color:#000;
}
& :first-child{
    font-size:22px;
    margin-right:8px;
    margin-top:3px;
}
`
const Image=styled("img")({
    height:'40px',
    width:'40px',
    borderRadius:'50%'

})

const Header = () => {
    const [openDrawer,setOpenDrawer]=useState(false);
    const {account}=useContext(AccountContext);
    const toggleDrawer=()=>{
        setOpenDrawer(true)
    }
  return (
    <>
      <Component>
        <Image src= {account.picture} alt="dp" onClick={()=> toggleDrawer()}/>
        <Wrapper>
<MessageIcon/>
<HeaderMenu setOpenDrawer={setOpenDrawer}/>
</Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}

export default Header
