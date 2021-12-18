import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    biography:{
      type:String,
      max:180
    },
    location: {
      type:String,
      max:50
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
