import express from "express";
import { getTasks } from '../controllers/task.controller.js'
const router = express.Router();

router.get("/tasks", getTasks);

export default router;