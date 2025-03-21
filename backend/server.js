import express from "express";
import cors from "cors";
import { connect } from "./src/database/connect.js";
import taskRoutes from './src/routes/task.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use('/api', taskRoutes);

app.listen(PORT, () => {
    connect();
    console.log(`Szerver fut a ${PORT} porton`);
});