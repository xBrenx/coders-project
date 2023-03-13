import { Request, Response } from "express";
import { generateToken } from "../config/jwt.config";
import { User } from "../Models/users";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { getTokenData } from"../config/jwt.config";
import { getTemplate, sendEmail } from "../config/mail.config";
import { v4 } from "uuid";
dotenv.config()

const BCRYPT_SALT_ROUNDS= 12

// get all users
export const getUsers = async (_req: Request, res: Response) => {
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
    const { name, email, password, done } = req.body;
    let userName = await User.findOne({
      name: name,
    });
    let userEmail = await User.findOne({
      email: email,
    });
    let passwordHashed = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS) 
    if (userName || userEmail) {
      return done(null, false, console.log("This user name already exists"));
    } else {
      const code = v4();
      let user = new User({ name, email, code, password:passwordHashed});
      const token = generateToken({ email, code });
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
    const { token } = req.params;

    const data = getTokenData(token);

    if (data === null) {
      return res.json({
        success: false,
        msg: "Error. Data couldn't be acccessed ",
      });
    }

    const { email, code } = data;
    let user = await User.findOne({
      email: email,
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
    return res.redirect("http://localhost:3000/home");
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
    await User.findByIdAndUpdate(req.params.id, {
      // trae el usuario por id y actualiza email y passwor
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
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: " User deleted successfully" });
  } catch (error) {
    res.json({ message: " Error deleting user " });
  }
};
