import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  code :{
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "UNVERIFIED",
  }
});
export const User = mongoose.model("User", UserSchema);
