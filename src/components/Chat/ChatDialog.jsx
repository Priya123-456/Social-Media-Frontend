
import {Dialog,Box,styled} from "@mui/material"
import Menu from "./Menu/Menu"
import EmptyChat from "./EmptyChat/EmptyChat"
import Chatbox from "./EmptyChat/Chatbox"
import { useContext } from "react"
import { AccountContext } from "../Context/AccountProvider"

const Components=styled(Box)`
display:flex;
`
const LeftBox=styled(Box)`
min-width:450px;
`
const RightBox=styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0, 0, 0, 0.14);
`

const dialogStyle={
    height:'95%',
   margin:'20px',
    width:'100%',
   maxWidth:'100%',
   maxHeight:'100%',
   borderRadius:'none',
    
    boxShadow:'none',
    overflow:'hidden',
   
   

}
const ChatDialog = () => {

    const {person}=useContext(AccountContext);
  return (
    <Dialog 
    open={true} 
     PaperProps={{sx:dialogStyle}}
     hideBackdrop={true}
     maxWidth={'md'}
    
    >
        <Components>
            <LeftBox>
                <Menu/>

            </LeftBox>
            <RightBox>
             {Object.keys(person).length ? <Chatbox/> : <EmptyChat/>}
            </RightBox>
        </Components>
     
    </Dialog>
  )
}

export default ChatDialog
