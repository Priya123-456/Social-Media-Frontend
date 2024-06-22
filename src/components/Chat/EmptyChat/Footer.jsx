import {Box, InputBase,styled}  from "@mui/material"
import {EmojiEmotionsOutlined,AttachFile,Mic}  from "@mui/icons-material"
import { useEffect } from "react"
import { uploadFile } from "../../../Services/Api"

const Container=styled(Box)`
height:55px;
background:#ededed;
display:flex;
width:100%;
align-items:center;
padding:0 15px;
& >*{
    margin:5px;
    color:#919191;
}

`

const Search=styled(Box)`
background-color:#ffffff;
border-radius:18px;
width:calc(94%-100px);
`
const InputField=styled(InputBase)`
widht:100%;
padding:20px;
height:20px;
padding-left:25px;
font-size:14px;

`
const AttachIcon=styled(AttachFile)`
tranform:rotate(40deg)
`

const Footer = ({sendText,setValue,value,file,setFile,setImage}) => {

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file])

    const onFileChange = (e) => {
        setValue(e.target.files[0].name);
        setFile(e.target.files[0]);
    }



   
  return (
    <Container>
      <EmojiEmotionsOutlined/>
    <label htmlFor='fileInput'>
    <AttachIcon/>
    </label>

     
      <input 
      type="file"
      id='fileInput'
      style={{display:'none'}}
      onChange={(e) => onFileChange(e)}
      
      />
      
      <Search>
        <InputField
        placeholder="Type a message"
        onChange={(e)=> setValue(e.target.value)}
        onKeyPress={(e) => sendText(e)}
                    value={value}
        
        />
      </Search>
      <Mic/>
    </Container>
  )
}

export default Footer
