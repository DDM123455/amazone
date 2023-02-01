import express from "express";
import data from "../data.js";
import Product from "../Models/productsModel.js";
import User from "../Models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createProduct = await Product.insertMany(data.products);
  await User.remove({});
  const createUser = await User.insertMany(data.users);
  res.send({ createProduct, createUser });
});
export default seedRouter;
