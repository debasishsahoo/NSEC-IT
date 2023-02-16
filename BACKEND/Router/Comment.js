import express from 'express';
const router = express.Router();

import { newComment, getComments, deleteComment } from '../Controller/Comment.Controller.js'

router.post('/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/delete/:id', deleteComment);

export default router;