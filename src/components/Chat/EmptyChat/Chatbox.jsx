import {Box} from "@mui/material"
import ChatHeader from "./ChatHeader"
import ChatMiddle from "./ChatMiddle"
import { useContext , useEffect,useState} from "react"
import { AccountContext } from "../../Context/AccountProvider"
import { getConversation } from "../../../Services/Api"


const Chatbox = () => {
    const {person,account}=useContext(AccountContext);
    const [conversation,setConversation]=useState([]);

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);
  return (
    <Box style={{height:"75%"}}>
        <ChatHeader person={person}/>
        <ChatMiddle person={person} 
        conversation={conversation}/>
      
    </Box>
  )
}

export default Chatbox
