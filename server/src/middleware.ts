import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
interface AuthenticatedRequest extends Request {
    user?: { id: string };
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decoded as { id: string };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};
