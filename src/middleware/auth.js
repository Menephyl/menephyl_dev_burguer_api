import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.js';

const authMiddleware = (request, response, next) => {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({ error: 'Token not provided. Make login again to get a new token' });
    }

    const token = authToken.split(' ')[1];

    try {
        jwt.verify(token, authConfig.secret, (error, decoded) => {
            if (error) {
                throw new Error();
            }

            request.userId = decoded.id;
            // request.userName = decoded.name;
            request.userIsAdmin = decoded.admin;
        });
    } catch (_error) {
        return response.status(401).json({ error: 'Token is invalid. Make login again to get a new token' });
    }
    return next();
};

export default authMiddleware;
