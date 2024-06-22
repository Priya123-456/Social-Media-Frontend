import { useContext } from "react";
import {Dialog,Box,Typography,styled} from "@mui/material"
import { img } from "../Constants/Data";
import {GoogleLogin} from "@react-oauth/google"
import {jwtDecode} from "jwt-decode"
import { AccountContext } from "../Context/AccountProvider";
import { addUser } from "../../Services/Api";


const Component=styled(Box)`

`
const Title=styled(Typography)`
font-size:26px;
color;#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;

`
const Container=styled(Box)`
padding:56px,0,56px,56px;
`
const Image=styled('img')({
    height:100,
    width:100,
    margin:'50px 0 0 50px',
    align:'center'

})
const dialogStyle={
    height:'70%',
    marginTop:'15%',
    width:'60%',
    marginBottom:'7%',
    boxShadow:'none',
    overflow:'hidden',
   
    backgroundColor:'#ffffff'

}
const LoginDialog = () => {
    const {setAccount}=useContext(AccountContext);
    
    const onLoginSuccess= async(res)=>{
    const decode = jwtDecode(res.credential);
  
   
    setAccount(decode);
    await addUser(decode);


    }
    const onErrorSuccess=(res)=>{
        console.log("Login Failed" , res);

    }
  return (
    <Dialog
     open={true} 
     PaperProps={{sx:dialogStyle}}
     hideBackdrop={true}

        
    >
        <Component>
            <Container>
                <Title>
                    To Use Messanger On Your Computer:
                </Title>
            </Container>
                <Box>
                    <Image src={img} alt="img"/>

                
            </Box>
            <Box fontStyle={{position:'absolute',top:'50%', transform:'translateX(25%)'}}>
                <GoogleLogin

                onSuccess={onLoginSuccess}
                onError={onErrorSuccess}
                
                />
            </Box>
        </Component>
        
     
    </Dialog>
  )
}

export default LoginDialog
