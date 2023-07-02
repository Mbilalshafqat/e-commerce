import JWT from 'jsonwebtoken';
import User from '../models/User.js';

// Protected Routes token base
export const verifyToken = async (req, res, next) => {
    let token;

    token = req.cookies.accessToken;

    if (token) {
        try {
            // ? chuyển mã token sang object
            const decoded = JWT.verify(token, process.env.JWT_SECRET);
            // ? tìm kiếm theo id của user trong object được chuyển đổi
            req.user = await User.findById(decoded.userId);
            next();
        } catch (error) {
            console.log(error);
        }
    }
};

// Admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        // console.log(user);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: 'Unauthorized Access Admin!',
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: 'Error in admin middleware',
        });
    }
};
