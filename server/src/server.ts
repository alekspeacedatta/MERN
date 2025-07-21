import express from 'express';
import cors from 'cors'
import { connectDB } from './config/db';
import { ProductModel } from './models/Product';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());



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