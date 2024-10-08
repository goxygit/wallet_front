import { apiUrl } from "./axios";
import axios from './axios'

export const iam = async () => {
  try{
    const {data, status} = await axios.get(
      `${apiUrl}/user/auth`,{
        withCredentials: true, // Это важно для отправки куки!
      }
    )
    console.log(status)
    return status
  }
    
  
   catch(e){
    console.log(e)
   }
  
    
  };