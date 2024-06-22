import axios from 'axios';

const url='http://localhost:7000';

export const addUser= async (data)=>{
    try{
        await  axios.post(`${url}/add`,data);
       
     
    }catch(error){
        console.log("Error while calling adduser API",error.message );
    }
}

export const getUsers= async ()=>{
    try{
        let response=await axios.get(`${url}/users`);
       
        return response.data;

    }catch(error){
        console.log("error while calling getusers api",error.message)
    }

}

export const setConversation = async (data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);

    } catch(error){
        console.log("error while calling setConversation api",error.message)

    }
}

export const getConversation = async (data)=>{
    try{
        let response=  await axios.post(`${url}/conversation/get`,data);
        return response.data;

    } catch(error){
        console.log("error while calling getConversation api",error.message)

    }
}


export const newMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}