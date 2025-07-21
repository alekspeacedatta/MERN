import { Router, Request, Response } from 'express';
import { ProductModel } from '../models/Product';

const router = Router()


router.post('/', async (req: Request, res: Response) => {
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

router.delete('/:productID', async (req: Request, res: Response) => {
    try {
        const { productID } = req.params;
        const deleteProduct = await ProductModel.findByIdAndDelete(productID);

        if(!deleteProduct){
            return res.status(404).json({ message: 'Product Not Found' })
        }

        res.status(200).json({ message: 'Product Deleted Successfully', deleteProduct: deleteProduct })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Deleting Product', error })
    }
})

export default router;