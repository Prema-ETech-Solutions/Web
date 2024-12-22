import express from 'express';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from './config/database.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

// Connect to MongoDB
connectDB(MONGO_URI);
disconnectDB();

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
