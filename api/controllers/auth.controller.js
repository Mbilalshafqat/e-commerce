import { comparePassword, hashPassword } from '../helpers/auth.helper.js';
import User from '../models/user.model.js';
import JWT from 'jsonwebtoken';

// POST REGISTER
export const register = async (req, res, next) => {
    try {
        const { name, email, password, phone, address } = req.body;
        // validation
        if (!name || !email || !password || !phone || !address) {
            return res.send({ error: 'Fields is Required' });
        }

        // check user
        const existingUser = await User.findOne({ email });
        // existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already registered please login',
            });
        }
        // register user
        const hashedPassword = await hashPassword(password);
        // save
        const user = new User({ name, email, phone, address, password: hashedPassword }).save();
        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error registering',
            error,
        });
    }
};

// POST LOGIN
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // validation
        if (!email || !password) {
            return res.status(403).send({
                success: false,
                message: 'Invalid email or password',
            });
        }
        // check user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered',
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).send({
                success: false,
                message: 'You not authentication',
            });
        }
        // token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(200).send({
            success: true,
            message: 'Login successfully!',
            user: {
                name: user.name,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(
            500,
            send({
                success: false,
                message: 'Error Login',
                error,
            }),
        );
    }
};
