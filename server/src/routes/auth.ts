import { Router, Request, Response } from 'express';
import { UserModel } from '../models/User';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authenticateToken } from '../middleware';
const router = Router();
interface CustomRequest extends Request {
  user?: { userId: string, email: string };
}

router.post('/register', async (req: Request, res: Response) => {
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
            { id: newUser._id.toString(), email: newUser.email, name: newUser.name },
            process.env.JWT_SECRET!, 
            { expiresIn: '7d' }
        )

        res.status(201).json({ message: 'User Created Successfully', user: newUser, token });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error Registering User', error })
    }
})
router.post('/login', async (req: Request , res: Response ) => {
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
            { id: checkUser._id.toString(), email: checkUser.email, name: checkUser.name },
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
router.get('/me', authenticateToken, async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(400).json({ message: 'User not found in token' });
    }

    const user = await UserModel.findById(userId).select('-password'); 

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to get user', error });
  }
});

export default router