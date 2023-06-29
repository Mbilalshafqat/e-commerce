import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConnect from './config/db.js';

// configure env
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// PORT
const PORT = process.env.PORT;

// MODE
const MODE = process.env.DEV_MODE;

// rest api
app.get('/', (req, res) => {
    res.send({
        message: 'Hello World!',
    });
});

// run listen
app.listen(PORT, () => {
    dbConnect();
    console.log(`Server is running on ${MODE} mode on port ${PORT}`.bgCyan.white);
});
