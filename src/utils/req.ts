import { apiUrl } from "./axios";
import axios from './axios'

type IamResponse = {
  status: number;
  data: any;
};

export const iam = async (): Promise<IamResponse | undefined> => {
  try{
    const {data, status} = await axios.get(
      `${apiUrl}/user/auth`,{
        withCredentials: true, // Это важно для отправки куки!
      }
    )
    console.log(status)
    return {status, data}
  }
    
  
   catch(e){
    console.log(e)
   }
  
    
  };