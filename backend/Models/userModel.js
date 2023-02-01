import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, require: true },
    email: { type: String, require: true },
    password: { type: String, unique: true, require: true },
    isAdmin: { type: String, default: false, require: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
