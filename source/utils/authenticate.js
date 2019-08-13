// Instruments
import { getPassword } from './env';

export const authenticate = (req, res, next) => {
    const pwd = req.header('authorization');

    if (pwd === getPassword()) {
        next();
    } else {
        res.status(401).json({ message: 'Invalid password' });
    }
};
