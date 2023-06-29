import { hashPassword } from '../helpers/auth.helper.js';
import User from '../models/user.model.js';

export const register = async (req, res, next) => {
    try {
        const [name, email, password, phone, address] = req.body;
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
