import express from 'express';
const router = express.Router();

import signupUser, { loginUser, logoutUser } from '../Controller/User.Controller'

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/logout', logoutUser);
router.post('/token', () => { });

export default router;
