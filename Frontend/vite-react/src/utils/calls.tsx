
import axios from "axios"
import config  from "../var_config"

interface Config {
  dev: {
    BASE_URL: string;
  };
  prod: {
    BASE_URL: string;
  };
}

const nodeEnv = import.meta.env.VITE_NODE_ENV;


const baseURL = config[nodeEnv as keyof Config].BASE_URL;
console.log("🚀 ~ baseURL:", baseURL)

export const sendToGoBackend = async(data : Object, endpoint : string) => {
   try {
    console.log("🚀 ~ sendToGoBackend ~ endpoint:", endpoint)
    console.log("\n\n🚀 ~ sendToGoBackend ~ data:", data);
    

  const response =  await axios.post(
        `http://localhost:5050/${endpoint}`,
        data, 
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          }
        }
      )
  console.log("🚀 ~ sendToGoBackend ~ response:", response)
  return response
   } catch (error) {
    console.log("🚀 ~Error at sendToGoBackend ~ >>:", error)
    
   }
}

