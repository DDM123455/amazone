import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("ok");
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
