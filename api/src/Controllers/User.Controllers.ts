import { Request, Response } from "express";
import {User} from "../Models/users";
const { getTokenData } = require("../config/jwt.config");
const { getTemplate, sendEmail } = require("../config/mail.config");
const {v4 : uuidv4 } = require("uuid");

// get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

// get user by id
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// create user

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, done } = req.body
    let user = await User.findOne({
      email: email, 
      name: name,
    })
    if(user){
      return done(null, false, console.log("This user name already exists"));
    }else{
      const code = uuidv4();
      user = new User({ name, email, code, password});
      const token = getTokenData({ email, code });
      const template = getTemplate(name, token);

      await sendEmail(email, "Confirm your account", template);
        await user.save();

        res.json({
          success: true,
          msg: "User successfully registered",
        });
    }

  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "Something went wrong. Registration has failed",
    });
  }
  
};
export const confirm = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    
    const data =  getTokenData(token);
    
    
    if (data === null) {
      return res.json({ success: false, msg: "Error. Data couldn't be acccessed " });
    }

    const { email, code } = data.data;

    const user = await User.findOne({
      code: code 
    });
    if (user === null) {
      return res.json({
        success: false,
        msg: "The user doesn't exist",
      });
    }
    if (code !== user.code) {
      return res.redirect("/error.html");
    }
    user.status = "VERIFIED";
    await user.save();
    return res.redirect("http://localhost:3005/home");
    //return res.redirect("")
  } catch (error) {
    return res.json({
      success: false,
      msg: "Error al confirmar usuario",
    });
  }
};

// update user

export const updateUser = async (req: Request, res: Response) => {
  const { email, passowrd } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      email,
      passowrd,
    });
    res.json({ message: " User updated successfully" });
  } catch (error) {
    res.json({ message: " Error updating user " });
  }
};

//delete user

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({ message: " User deleted successfully" });
  } catch (error) {
    res.json({ message: " Error deleting user " });
  }
};
