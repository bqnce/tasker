require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./src/database/connect');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connect();

// Egyszerű teszt API végpont
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend működik!' });
});

app.listen(PORT, () => {
    console.log(`Szerver fut a ${PORT} porton`);
});