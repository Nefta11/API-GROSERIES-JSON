import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import productsRouter from './routes/products.routes.js'


const app = express();
config();


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // Corregir aquí
app.use(productsRouter);

export default app;
