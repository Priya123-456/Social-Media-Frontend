import {Box,styled} from "@mui/material"
import Footer from "./Footer"
//import { io } from 'socket.io-client';
import {useContext,useState,useEffect ,useRef} from "react"
import { AccountContext } from "../../Context/AccountProvider"
import { newMessages,getMessages } from "../../../Services/Api"
import Message from "./Message"


const Container = styled(Box)`
    padding: 1px 80px;
`;



const Wrraper=styled(Box)`
backgroung-image:url(${'https://i.pinimg.com/564x/3b/0f/d6/3b0fd68e391cd7b529cd394e00f278d6.jpg'});
background-size:50%;
`
const Component=styled(Box)`
height:81vh;
overflow-y:scroll;
`

const ChatMiddle = ({person,conversation}) => {

    const [value,setValue]=useState('');
    const {account, socket, setNewMessageFlag, newMessageFlag}=useContext(AccountContext);
    const [messages, setMessages] = useState([]);
   
    const [file,setFile]=useState();
    const [image,setImage]=useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();
    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, []);


    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation?._id);
            setMessages(data);
        }
        getMessageDetails();
    }, [conversation?._id, person._id,newMessageFlag]);


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages]);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
            setMessages((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, conversation]);

   // const receiverId = conversation?.members?.find(member => member !== account.sub);

    const sendText = async (e) => {
      
        const code = e.keyCode || e.which;
       

        if(code === 13) { 
            let message= {};
            if(!file){
         message = {
                senderId:account.sub,
                receiverId:person.sub,
                conversationId:conversation._id,
                type:'text',
                text:value
            }
        }else{
             message = {
                senderId:account.sub,
                receiverId:person.sub,
                conversationId:conversation._id,
                type:'file',
                text:image
            }

        }
        socket.current.emit('sendMessage', message);

            await newMessages(message);

            setValue('');
            setFile('');
            setImage('');
           
            setNewMessageFlag(prev => !prev);
        }
    }
           
  return (
    <Wrraper>
        <Component>

            {
                messages && messages.map(message=>(
                    <Container  ref={scrollRef}>
                    <Message message={message} />
                    </Container>

                ))
            }

        </Component>
        <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
        
        />
      
    </Wrraper>
  )
}

export default ChatMiddle
