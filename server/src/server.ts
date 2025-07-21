import jwt from 'jsonwebtoken';
import cors from 'cors'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import express from 'express';
import { connectDB } from './config/db';
import { ProductModel } from './models/Product';
import { UserModel } from './models/User';

const app = express();

dotenv.config();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());


app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const exsistingUser = await UserModel.findOne({ email });
        if(exsistingUser){
            return res.status(400).json({ message: 'User already exsist' })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new UserModel({ name, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            process.env.JWT_SECRET!, 
            { expiresIn: '7d' }
        )

        res.status(201).json({ message: 'User Created Successfully', user: newUser, token });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error Registering User', error })
    }
})
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const checkUser = await UserModel.findOne({ email });
        if(!checkUser){
            return res.status(400).json({ message: 'Incorect email or password' })
        }
        const isMatch = await bcrypt.compare(password, checkUser.password);
        if(!isMatch){
            return res.status(400).json({ message: 'Incorect email or password' })
        }
        const token = jwt.sign(
            { userId: checkUser?._id, email: checkUser?.email },
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        )
        res.status(200).json({
            message: 'Login succesful',
            checkUser,
            token
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login Failed', error });
    }
})
app.get('/', async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
})
app.post('/', async (req, res) => {
    try {
        const { name, price} = req.body;
        const newProduct = new ProductModel({ name, price });

        await newProduct.save();
        res.status(201).json({ message: 'product added successfuly', user: newProduct });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'error: could not create product', details: error });
    }
})

app.delete('/:productID', async (req, res) => {
    try {
        const { productID } = req.params;
        const deleteProduct = await ProductModel.findByIdAndDelete(productID);

        if(!deleteProduct){
            return res.status(404).json({ message: 'Product Not Fount' })
        }

        res.status(200).json({ message: 'Product Deleted Successfully', deleteProduct: deleteProduct })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Deleting Pproduct', error })
    }
})





app.get('/api/data', (req, res) => {
    res.json({ message: 'hello this is message from backend', id: 5 })
});


connectDB();
app.listen(3000, () => {
    console.log('server runs on http://localhost:3000');
})