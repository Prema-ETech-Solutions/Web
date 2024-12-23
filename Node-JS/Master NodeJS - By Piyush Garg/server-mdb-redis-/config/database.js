import mongoose from 'mongoose';

// Connect to MongoDB
const connectDB = async (MONGO_URI) => {
    try {
        const connection = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        return connection;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        throw new Error('MongoDB connection failed');
    }
};

// Disconnect from MongoDB
const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB');
    } catch (err) {
        console.error('Error disconnecting from MongoDB:', err.message);
    }
};

export { connectDB, disconnectDB };
