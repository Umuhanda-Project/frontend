import axios from '../config/axios';
import { tokenDecoder } from "./tokenDecoder";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const decodedToken = tokenDecoder();
const token = sessionStorage.getItem("token");

export const getuserAttempts = async () => {
    try {
      const response = await axios.get(`/attempts/${decodedToken?.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        withCredentials: true,
      }
    );

    const responseData = response.data;
    return responseData;
     
    } catch (error:any) {
      console.log(error)

      toast.error(error.response?.data?.error || "Fetching User Exam attempts failed");
    } 
  };