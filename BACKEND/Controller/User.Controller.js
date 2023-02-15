import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../Model/Token.Model.js'
import User from '../Model/User.model.js';

dotenv.config();

export const signupUser = async (request, response) => {
    const user = {
        username: request.body.username,
        name: request.body.name,
        password: request.body.password
    }


    if (!user.username || !user.name || !user.password) {
        return response.status(400).json({ msg: 'Please Provide Data for sign up' });
    }

    let username = await User.findOne({ username: user.username });

    if (username) {
        return response.status(400).json({ msg: 'Username  Already Exist' });
    }


    const salt = 10;
    const hashedPassword = await bcrypt.hash(user.password, salt);

    let newuser = {
        username: user.username,
        name: user.username,
        password: hashedPassword
    }


    try {
        const newUser = new User(newuser);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successfully' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
};
export const loginUser = async (request, response) => {
    let user = await User.findOne({ username: request.body.username });
    if (!user) {
        return response.status(400).json({ msg: 'Username does not match' });
    }

    try {
        let match = await bcrypt.compare(request.body.password, user.password);

        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });

            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({ token: refreshToken });
            await newToken.save();

            response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, name: user.name, username: user.username });

        } else {
            response.status(400).json({ msg: 'Password does not match' })
        }
    } catch (error) {
        response.status(500).json({ msg: 'error while login the user' })
    }
};
export const logoutUser = async (request, response) => {
    const token = request.body.token;
    console.log(token)
    await Token.deleteOne({ token: token });

    response.status(204).json({ msg: 'logout successfully' });
};