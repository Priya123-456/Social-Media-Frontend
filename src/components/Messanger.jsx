import {AppBar,Toolbar,styled,Box} from "@mui/material"
import LoginDialog from "./Account/LoginDialog";
import ChatDialog from "./Chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "./Context/AccountProvider";



    const Component=styled(Box)`
    height:100vh;
    background:#D9D9D9;
    `

    const Header= styled(AppBar)`
    height: 125px;
    background-color:#20C9FF;
    box-shadow:none;
`

    const LoginHeader= styled(AppBar)`
    height: 120px;
    background-color:#20C9FF;
    box-shadow:none;
`

const Messanger = () => {
    const {account}=useContext(AccountContext);
  return (
    
    <Component>
        {
            account ?
            <>
            <Header>
                <Toolbar>

                </Toolbar>
            
             </Header>
              <ChatDialog/>
              </>
            :
            <>
      
    <LoginHeader>
        <Toolbar>

        </Toolbar>
    </LoginHeader>
  
   <LoginDialog/>
   </>
 }
   </Component>

   
  )
}

export default Messanger;
