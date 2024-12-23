import { createClient } from 'redis';

const connectRedis = async () => {
    const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
    const REDIS_PORT = process.env.REDIS_PORT || 6379;
    const REDIS_USERNAME = process.env.REDIS_USERNAME || '';
    const REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';

    const redisClient = createClient({
        url: `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`,
    });

    redisClient.on('error', (err) => console.error('Redis Client Error:', err));

    try {
        await redisClient.connect();
        console.log('Connected to Redis');
        return redisClient;
    } catch (err) {
        console.error('Error connecting to Redis:', err.message);
        throw new Error('Redis connection failed');
    }
};

const disconnectRedis = async (redisClient) => {
    try {
        await redisClient.quit();
        console.log('Disconnected from Redis');
    } catch (err) {
        console.error('Error disconnecting from Redis:', err.message);
    }
};

export { connectRedis, disconnectRedis };
