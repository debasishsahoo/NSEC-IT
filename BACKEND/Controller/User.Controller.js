import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../Model/Token.Model.js'
import User from '../Model/User.model.js';

dotenv.config();

export const signupUser = async (request, response) => { };
export const loginUser = async (request, response) => { };
export const logoutUser = async (request, response) => { };