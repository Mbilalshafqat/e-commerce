import mongoose from 'mongoose';
import colors from 'colors';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB is connected'.bgMagenta.white);
    } catch (error) {
        handleError(error.bgRed.white);
    }
};

export default connect;
