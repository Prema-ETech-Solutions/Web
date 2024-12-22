import mongoose from 'mongoose';

const connectDB = async (MONGO_URI) => {
    if (!MONGO_URI) {
        console.error("MongoDB URI is missing!");
        return false;
    }

    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        return true;  // Return true if connection is successful
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        return false;  // Return false if connection fails
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (err) {
        console.error('Error disconnecting from MongoDB:', err.message);
    }
};

export { connectDB, disconnectDB };
