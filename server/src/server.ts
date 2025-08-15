import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db';

dotenv.config();

const app = express();
const port = process.env.PORT || 3100;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

import authRoutes from './routes/auth';
import productRoutes from './routes/product';
app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);

app.get('/api/data', (req, res) => {
    res.json({ message: 'hello this is message from backend', id: 5 });
});

connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
