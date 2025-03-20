import mongoose from "mongoose";

export const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Sikeresen csatlakoztam az adatbázishoz"))
    .catch((err) => console.log("Hiba a csatlakozás során:", err));
};