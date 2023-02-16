import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const Connection = async () => {
    const URL = process.env.MONGO
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;