import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';

dotenv.config();
const app = express();

const startServer = async () => {
  await connectDB(); // Connect to MongoDB Atlas

  // Middleware
  app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
  app.use(express.json());

  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/product', productRoutes);

  // Serve frontend
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
  });
  
  app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from backend', id: 5 });
  });

  // Start server on port 3100
  app.listen(3100, () => console.log('Server running on http://localhost:3100'));
};

startServer().catch(err => console.error(err));
