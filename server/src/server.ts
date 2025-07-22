import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express';
import { connectDB } from './config/db';
import authRoutes from './routes/auth'
import productRoutes from './routes/product';

const app = express();

dotenv.config();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);


app.get('/api/data', (req, res) => {
    res.json({ message: 'hello this is message from backend', id: 5 })
});

connectDB();
app.listen(3000, () => {
    console.log('server runs on http://localhost:3000');
})
