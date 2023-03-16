import { Request, Response } from "express";
import { User } from "../Models/users";
import bcrypt from "bcrypt";
import { getTokenData } from "../config/jwt.config";
import { sendEmail, getForgotPassTemplate } from "../config/mail.config";

const SALT = 12
// forgot password
export const forgotPassword = async(req: Request, res: Response) => {
  const { token } = req.body
  console.log(token)
  const data = getTokenData(token)
  const { email } = data
  console.log(data)
  try {
    let user = await User.findOne({
      email: email,
    })
      if(user){
      const template = getForgotPassTemplate(user.name, token);
      await sendEmail(email, "Reset your password", template);
      res.send({msg: "An email has been sent for you to restore your password"})
    }else{
      res.send({msg: "No user registered with the email given"})
    }
  } catch (error) {
    res.send(error)
  }

}
// restore password
export const resetPassword = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let passwordHashed = await bcrypt.hash(password, SALT)
  const search  = await User.find({email: email});
  if(search){
    let user = search[0]
    user.password = passwordHashed
    user.save()
    res.send({msg : "Your new password has been set correctly"})
  }else{
    res.send({ msg: "No user registered with this email" })
  }

}