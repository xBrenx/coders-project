import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_KEY;
console.log(secret);

export const generateToken = (payload: any) => {
  console.log("jwt.config linea 10", payload);
  if (secret === undefined) {
    throw new Error("JWT_KEY not defined");
  } else {
    return jwt.sign(payload, secret || "", { expiresIn: "1h" });
  }
};

export const getTokenData = (token: string) => {
  console.log("token quel recibe gettokenData en la linea 17", token);
  let data: any = null;
  try {
    data = jwt.verify(token, secret || "");
    console.log("jwt.config linea 30", data);
  } catch (error) {
    console.log("error que arroja getTokenData linea 33", error);
    if (error instanceof jwt.TokenExpiredError) {
      data = { message: "Token expired" };
    } else if (error instanceof jwt.JsonWebTokenError) {
      data = { message: "Invalid token" };
    }
  }
  return data;
};
