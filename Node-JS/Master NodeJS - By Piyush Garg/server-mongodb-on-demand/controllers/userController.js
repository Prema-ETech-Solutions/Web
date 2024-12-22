import { connectDB, disconnectDB } from '../config/database.js';
import User from '../models/userModel.js';

// Fetch all users
export const getAllUsers = async (req, res) => {
    let dbConnected = false;
    try {
        const MONGO_URI = process.env.MONGO_URI;
        dbConnected = await connectDB(MONGO_URI);  // Connect to DB

        if (!dbConnected) {
            return res.status(500).json({ message: 'Failed to connect to the database' });
        }

        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        if (dbConnected) await disconnectDB();  // Ensure DB disconnects only if connected
    }
};

// Add a new user
export const createUser = async (req, res) => {
    let dbConnected = false;
    try {
        const MONGO_URI = process.env.MONGO_URI;
        dbConnected = await connectDB(MONGO_URI);  // Connect to DB

        if (!dbConnected) {
            return res.status(500).json({ message: 'Failed to connect to the database' });
        }

        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    } finally {
        if (dbConnected) await disconnectDB();  // Ensure DB disconnects only if connected
    }
};

// Update a user by ID
export const updateUser = async (req, res) => {
    let dbConnected = false;
    try {
        const MONGO_URI = process.env.MONGO_URI;
        dbConnected = await connectDB(MONGO_URI);  // Connect to DB

        if (!dbConnected) {
            return res.status(500).json({ message: 'Failed to connect to the database' });
        }

        const updatedUser = await User.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    } finally {
        if (dbConnected) await disconnectDB();  // Ensure DB disconnects only if connected
    }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
    let dbConnected = false;
    try {
        const MONGO_URI = process.env.MONGO_URI;
        dbConnected = await connectDB(MONGO_URI);  // Connect to DB

        if (!dbConnected) {
            return res.status(500).json({ message: 'Failed to connect to the database' });
        }

        const deletedUser = await User.findOneAndDelete({ id: req.params.id });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        if (dbConnected) await disconnectDB();  // Ensure DB disconnects only if connected
    }
};
