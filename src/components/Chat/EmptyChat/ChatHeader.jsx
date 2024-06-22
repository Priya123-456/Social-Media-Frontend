import {Box,styled,Typography} from "@mui/material"
import {Search ,MoreVert} from "@mui/icons-material"
import { useContext } from "react"
import { AccountContext } from "../../Context/AccountProvider"

//import { profile } from "../../Constants/Data"

const Component =styled(Box)`
height:44px;
padding:8px 16px;
background:#ededed;
display:flex;
align-items:center;
`

const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
    objectFit:'cover'

})

const Name=styled(Typography)`
margin-left:12px !important;

`

const Status=styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgba(0 0 0 0.6);

`

const Right =styled(Box)`
margin-left:auto;
padding:8px;
font-size:24px;
color:#000;
`

const ChatHeader = ({person}) => {
    const {activeUsers} =useContext(AccountContext)
  return (
    <Component>
      <Image src={person.picture} alt=""/>

      <Box>
        <Name>{person.name}</Name>
        <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
      </Box>
      <Right>
        <Search/>
        <MoreVert/>
      </Right>
    </Component>
  )
}

export default ChatHeader
