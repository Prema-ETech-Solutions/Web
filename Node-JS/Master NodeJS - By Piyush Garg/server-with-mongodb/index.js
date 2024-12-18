import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

// Define a Mongoose schema and model first
const itemSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    ip_address: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    car: { type: String },
});

const Item = mongoose.model('users', itemSchema);

const mockData = {
    id: 1000,
    first_name: "Vanna",
    last_name: "Christoffe",
    email: "vchristofferr@google.es",
    gender: "Female",
    ip_address: "225.25.26.120",
    username: "vchristofferr",
};

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // initializeMockData();
    })
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Function to initialize mock data in the database
async function initializeMockData() {
    try {
        const existingItem = await Item.findOne({ id: mockData.id });
        if (!existingItem) {
            await Item.create(mockData);  // Uncommented this line
            console.log('Mock data added to the database.');
        } else {
            console.log('Mock data already exists in the database.');
        }
    } catch (err) {
        console.error('Error initializing mock data:', err.message);
    }
}

// REST API Routes

// GET: Fetch all items
app.get('/api/users', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Add a new item
app.post('/api/users', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT: Update an item by ID
app.put('/api/users/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE: Remove an item by ID
app.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findOneAndDelete({ id: req.params.id });
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
