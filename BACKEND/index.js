import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';

import UserRouter from './Router/User.Router.js';
import PostRouter from './Router/Post.Router.js';
import CommentRouter from './Router/Comment.js';



const PORT = 8000;

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', UserRouter)
app.use('/api/post', PostRouter)
app.use('/api/comment', CommentRouter)




Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));