import { connectDB, disconnectDB } from '../config/database.js';
import { connectRedis, disconnectRedis } from '../config/redis.js';
import User from '../models/userModel.js';

// Fetch all users
export const getAllUsers = async (req, res) => {
    let mongoConnection = null;
    let redisClient = null;

    try {
        // Connect to Redis
        redisClient = await connectRedis();

        const cacheKey = 'users';
        const TTL = process.env.REDIS_TTL || 600;

        // Check if data is cached in Redis
        const cachedData = await redisClient.get(cacheKey);
        if (cachedData) {
            console.log('Serving from Redis Cache');
            return res.json(JSON.parse(cachedData));
        }

        // Connect to MongoDB
        const MONGO_URI = process.env.MONGO_URI;
        mongoConnection = await connectDB(MONGO_URI);

        // Fetch data from MongoDB
        const users = await User.find();

        // Cache data in Redis with TTL
        await redisClient.set(cacheKey, JSON.stringify(users), { EX: parseInt(TTL) });

        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        // Disconnect MongoDB
        if (mongoConnection) await disconnectDB();

        // Disconnect Redis
        if (redisClient) await disconnectRedis(redisClient);
    }
};

// Create a new user and invalidate Redis cache
export const createUser = async (req, res) => {
    let mongoConnection = null;
    let redisClient = null;

    try {
        // Connect to Redis
        redisClient = await connectRedis();

        // Connect to MongoDB
        const MONGO_URI = process.env.MONGO_URI;
        mongoConnection = await connectDB(MONGO_URI);

        // Create new user
        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        // Invalidate Redis cache
        await redisClient.del('users');

        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    } finally {
        // Disconnect MongoDB
        if (mongoConnection) await disconnectDB();

        // Disconnect Redis
        if (redisClient) await disconnectRedis(redisClient);
    }
};
