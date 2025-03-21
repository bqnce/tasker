import { Tasks } from '../models/task.schema.js';

export const getTasks = async (req, res) => {
    try {
        const todos = await Tasks.find();
        if(todos.length === 0){
            res.json({ message: "Nincs még feladat feltöltve" });
            return;
        }
        res.status(200).json(todos);
      } catch (error) {
        res
         .status(500)
         .json({ message: "Hiba történt a ToDo lekérése során", error });
      }
}