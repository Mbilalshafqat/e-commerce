import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB is connected');
    } catch (error) {
        handleError(error);
    }
};

app.listen(port, () => {
    connect();
    console.log(`Server is listening on ${port}`);
});
