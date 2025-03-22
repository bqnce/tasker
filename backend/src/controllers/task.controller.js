import { Tasks } from "../models/task.schema.js";

export const getTasks = async (req, res) => {
  try {
    const todos = await Tasks.find();
    if (todos.length === 0) {
      res.json({ message: "Nincs még feladat feltöltve" });
      return;
    }
    res.status(200).json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hiba történt a ToDo lekérése során", error });
  }
};

export const createTask = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400).json({ message: "A todo mezőt kötelező kitölteni" });
      return;
    }
    const newTodo = await Tasks.create({ text });
    res.status(201).json(newTodo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hiba történt a ToDo létrehozása során", error });
  }
};
