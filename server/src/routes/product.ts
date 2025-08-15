import { Router, Request, Response } from 'express';
import { UserProductModel } from '../models/UserProduct';
import { ProductModel } from '../models/Product';
import { authenticateToken } from '../middleware';

const router = Router()
interface AuthenticatedRequest extends Request {
    user?: { id: string };
}

router.post('/' , async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new ProductModel({ name, price });

    await newProduct.save();
    res.status(201).json({ message: 'product added successfuly', user: newProduct });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'error: could not create product', details: error });
  }
})
router.get('/', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json({ products })
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})
router.get('/user-product', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(400).json({ error: 'User not found in request' });
    }

    const products = await UserProductModel.find({ userId }).sort({ createdAt: -1 });

    res.json({ products });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/user-product', authenticateToken,  async (req: AuthenticatedRequest, res: Response) => {
    try {
        const { name, price} = req.body;

        const userId = req.user?.id;
        if(!userId) return res.status(401).json({ message: 'Unauthorized' });
        const exsistingProduct = await UserProductModel.findOne({ name: name, userId: userId });
        if(exsistingProduct) return res.status(400).json({ message: `Product already added to cart` })
        const newProduct = new UserProductModel({ name, price, userId });

        await newProduct.save();
        res.status(201).json({ message: 'product added successfuly', user: newProduct });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'error: could not create product', details: error });
    }
})

router.delete('/user-product/:productID', authenticateToken, async (req: Request, res: Response) => {
    try {
        const { productID } = req.params;
        const deleteProduct = await UserProductModel.findByIdAndDelete(productID);

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