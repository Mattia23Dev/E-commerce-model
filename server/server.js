import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import cors from 'cors';

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
app.use(cors());

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send('Aa__dzYCyb2ppTa1ZvnEoJvzTh7h_a2QUgPkCDNBxeaNufwX5_t8JeEsgmeCUmDOkuFw7ybEHj8Y-Mx1');
});


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
