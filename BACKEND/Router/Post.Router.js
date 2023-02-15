import express from 'express';
const router = express.Router();

import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../Controller/Post.Controller'
import { authenticateToken } from '../Controller/JWT.Controller'

router.post('/create', createPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);
router.get('/post/:id', getPost);
router.get('/posts', getAllPosts);
router.post('/file/upload', () => { });
router.get('/file/:filename', () => { });

export default router;