
import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv";

dotenv.config()



export const generateToken = (payload: any) => {
  return jwt.sign(payload, process.env.JWT_KEY || "", { expiresIn: '1h' });
}

export const getTokenData = (token: string) => {
  let data = null;
  jwt.verify(token, process.env.JWT_KEY || "",(err,decoded)=>{
    if(err){
      console.log("Error getting data from token")
    }else{
      const data=decoded
    }
  })
  return data;
}
