import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }

    const token = authHeader.split(' ')[1];

    if (token === secretKey) {
        next();
    } else {
        res.status(403).json({ message: 'Invalid token' });
    }
};