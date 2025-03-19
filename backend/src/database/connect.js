const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

const connect = () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Sikeresen csatlakoztam az adatbázishoz"))
    .catch((err) => console.log("Hiba a csatlakozás során:", err));
};

module.exports = { connect };
