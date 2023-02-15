import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../model/token.js'
import User from '../model/user.js';

dotenv.config();

export const signupUser = async (request, response) => { };
export const loginUser = async (request, response) => { };
export const logoutUser = async (request, response) => { };