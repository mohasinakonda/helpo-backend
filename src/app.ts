import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./app/routes";
const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/v1", routes);

export default app;
